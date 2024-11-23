/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Mix&Mingle API
 * 
Mix&Mingle API Server

 * OpenAPI spec version: 0.3.0
 */
import { z as zod } from 'zod'

/**
 * 이벤트 목록을 조회합니다.
 * @summary 이벤트 목록 조회
 */
export const apiEventsGetResponseItem = zod.object({
  event_id: zod.number(),
  name: zod.string(),
  description: zod.string(),
  status: zod.string(),
  start_date: zod.string(),
  end_date: zod.string(),
  additional_info: zod.string().optional(),
  created_at: zod.string(),
  updated_at: zod.string(),
  deleted_at: zod.string().or(zod.null()).optional(),
})
export const apiEventsGetResponse = zod.array(apiEventsGetResponseItem)

/**
 * 이벤트를 생성합니다.
 * @summary 이벤트 생성
 */
export const apiEventsPostBody = zod.object({
  name: zod.string(),
  description: zod.string(),
  status: zod.enum(['대기중', '진행중', '종료됨', '취소됨']).optional(),
  start_date: zod.string().datetime(),
  end_date: zod.string().datetime(),
  additional_info: zod.string().optional(),
})

/**
 * 이벤트를 조회합니다.
 * @summary 이벤트 조회
 */
export const apiEventsEventIdGetParams = zod.object({
  event_id: zod.number(),
})

export const apiEventsEventIdGetResponse = zod.object({
  event_id: zod.number(),
  name: zod.string(),
  description: zod.string(),
  status: zod.string(),
  start_date: zod.string(),
  end_date: zod.string(),
  additional_info: zod.string().optional(),
  created_at: zod.string(),
  updated_at: zod.string(),
  deleted_at: zod.string().or(zod.null()).optional(),
})

/**
 * 이벤트를 수정합니다.
 * @summary 이벤트 수정
 */
export const apiEventsEventIdPutParams = zod.object({
  event_id: zod.number(),
})

export const apiEventsEventIdPutBody = zod.object({
  name: zod.string().or(zod.null()),
  description: zod.string().or(zod.null()),
  status: zod
    .enum(['대기중', '진행중', '종료됨', '취소됨'])
    .or(zod.null())
    .optional(),
  start_date: zod.string().datetime().or(zod.null()),
  end_date: zod.string().datetime().or(zod.null()),
  additional_info: zod.string().or(zod.null()).optional(),
})

export const apiEventsEventIdPutResponse = zod.object({
  event_id: zod.number(),
  name: zod.string(),
  description: zod.string(),
  status: zod.string(),
  start_date: zod.string(),
  end_date: zod.string(),
  additional_info: zod.string().optional(),
  created_at: zod.string(),
  updated_at: zod.string(),
  deleted_at: zod.string().or(zod.null()).optional(),
})

/**
 * 이벤트를 삭제합니다.
 * @summary 이벤트 삭제
 */
export const apiEventsEventIdDeleteParams = zod.object({
  event_id: zod.number(),
})

/**
 * 이벤트에 속한 참여자를 AI로 그룹핑합니다.
 * @summary 이벤트 Ai 그룹핑
 */
export const aIApiEventsEventIdAiGrouppingPostParams = zod.object({
  event_id: zod.number(),
})

export const aIApiEventsEventIdAiGrouppingPostBody = zod.object({
  count: zod.number().optional(),
  job: zod.enum(['랜덤', '유사성']).or(zod.null()).optional(),
  personality: zod.enum(['랜덤', '유사성']).or(zod.null()).optional(),
  interest: zod.enum(['랜덤', '유사성']).or(zod.null()).optional(),
})

export const aIApiEventsEventIdAiGrouppingPostResponse = zod.record(
  zod.string(),
  zod.object({}),
)

/**
 * 이벤트에 속한 참여자 그룹핑합니다.
 * @summary 이벤트 참여자 그룹핑
 */
export const apiEventsEventIdSetGroupPostParams = zod.object({
  event_id: zod.number(),
})

export const apiEventsEventIdSetGroupPostBody = zod.object({
  group_info: zod.record(zod.string(), zod.number()),
})

export const apiEventsEventIdSetGroupPostResponseItem = zod.object({
  session_id: zod.number(),
  user_id: zod.string(),
  event_id: zod.number(),
  group_id: zod.number().or(zod.null()).optional(),
  created_at: zod.string(),
  updated_at: zod.string(),
  deleted_at: zod.string().or(zod.null()).optional(),
})
export const apiEventsEventIdSetGroupPostResponse = zod.array(
  apiEventsEventIdSetGroupPostResponseItem,
)
