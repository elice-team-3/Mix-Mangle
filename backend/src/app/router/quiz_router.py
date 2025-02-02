from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, desc

from src.app.schema import QuizCreateRequest, QuizResponse, QuizListRequest, QuizBulkCreateSchema
from src.db.model import Quiz, Event
from src.db.session import get_session

router = APIRouter(
    tags=["이벤트 퀴즈"],
)


@router.post(
    "/quiz",
    name="퀴즈 생성",
    description="이벤트에 관련된 퀴즈를 생성합니다.",
    status_code=201,
    response_model=QuizResponse,
    response_description="Created"
)
async def _(
        quiz: QuizCreateRequest,
        session: AsyncSession = Depends(get_session),
):
    new_quiz = Quiz(**quiz.model_dump())
    session.add(new_quiz)
    await session.commit()
    await session.refresh(new_quiz)
    return QuizResponse(
        **new_quiz.__dict__
    )


@router.post(
    "/quiz/bulk",
    name="퀴즈를 여러개 생성",
    description="이벤트에 관련된 퀴즈를 여러개 생성합니다.",
    status_code=201,
    response_model=list[QuizResponse],
)
async def _(
        bulk_create: QuizBulkCreateSchema,
        session: AsyncSession = Depends(get_session),
):
    event_id = bulk_create.event_id
    event = await session.scalar(select(Event).where(Event.id == event_id))
    if not event:
        raise HTTPException(status_code=404, detail="이벤트를 찾을 수 없습니다.")

    old_quizzes = await session.scalars(select(Quiz).where(Quiz.event_id == event_id))
    for old_quiz in old_quizzes:
        await session.delete(old_quiz)

    new_quizzes = [
        Quiz(event_id=event_id, **q.model_dump()) for q in bulk_create.quizzes
    ]

    session.add_all(new_quizzes)

    await session.commit()
    for new_quiz in new_quizzes:
        await session.refresh(new_quiz)

    return [QuizResponse(**q.__dict__) for q in new_quizzes]


@router.get(
    "/quiz",
    name="퀴즈 리스트",
    description="이벤트에 관련된 퀴즈 리스트를 가져옵니다.",
    status_code=200,
    response_model=list[QuizResponse],
)
async def _(
        quiz_request: QuizListRequest = Depends(),
        session: AsyncSession = Depends(get_session),
):
    stmt = select(Quiz)
    if quiz_request.event_id:
        stmt = stmt.where(Quiz.event_id == quiz_request.event_id)
    stmt = stmt.order_by(desc(Quiz.id))

    result = await session.scalars(stmt)
    quiz_list = set(result)
    sorted_quiz_list = sorted(quiz_list, key=lambda quiz: quiz.id, reverse=True)

    return [QuizResponse(**q.__dict__) for q in sorted_quiz_list]


@router.delete(
    "/quiz/{quiz_id}",
    name="퀴즈 삭제",
    description="퀴즈를 삭제합니다.",
    status_code=204,
)
async def _(
        quiz_id: int,
        session: AsyncSession = Depends(get_session),
):
    stmt = select(Quiz).where(Quiz.id == quiz_id)
    quiz = await session.execute(stmt)

    if not quiz:
        raise HTTPException(status_code=404, detail="퀴즈를 찾을 수 없습니다.")

    await session.delete(quiz)
    await session.commit()
