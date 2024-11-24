/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Mix&Mingle API
 * 
Mix&Mingle API Server

 * OpenAPI spec version: 0.6.0
 */
import {
  z as zod
} from 'zod'

/**
 * 사용자가 이벤트에 참여합니다.
 * @summary 사용자 이벤트 참여
 */
export const apiSessionsPostBody = zod.object({
  "user_id": zod.string(),
  "event_id": zod.number()
})

/**
 * 세션 목록을 조회합니다.
 * @summary 세션 목록 조회
 */
export const apiSessionsGetQueryParams = zod.object({
  "user_id": zod.string().or(zod.null()).optional(),
  "event_id": zod.number().or(zod.null()).optional(),
  "group_id": zod.number().or(zod.null()).optional()
})

export const apiSessionsGetResponseItem = zod.object({
  "session_id": zod.number(),
  "user_id": zod.string(),
  "event_id": zod.number(),
  "group_id": zod.number().or(zod.null()).optional(),
  "created_at": zod.string(),
  "updated_at": zod.string().or(zod.null()).optional(),
  "deleted_at": zod.string().or(zod.null()).optional()
})
export const apiSessionsGetResponse = zod.array(apiSessionsGetResponseItem)

/**
 * 네트워크 세션을 조회합니다.
 * @summary 네트워크 세션 조회
 */
export const apiSessionsSessionIdGetParams = zod.object({
  "session_id": zod.number()
})

export const apiSessionsSessionIdGetResponse = zod.object({
  "session_id": zod.number(),
  "user_id": zod.string(),
  "event_id": zod.number(),
  "group_id": zod.number().or(zod.null()).optional(),
  "created_at": zod.string(),
  "updated_at": zod.string().or(zod.null()).optional(),
  "deleted_at": zod.string().or(zod.null()).optional()
})

/**
 * 세션을 삭제합니다.
 * @summary 세션 삭제
 */
export const apiSessionsSessionIdDeleteParams = zod.object({
  "session_id": zod.number()
})

/**
 * 사용자의 그룹을 조회합니다.
 * @summary 사용자의 그룹 조회
 */
export const apiSessionsEventIdGroupGetParams = zod.object({
  "event_id": zod.number()
})

export const apiSessionsEventIdGroupGetResponse = zod.object({
  "event_id": zod.number(),
  "group_info": zod.array(zod.object({

}))
})

