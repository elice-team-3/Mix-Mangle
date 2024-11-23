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
 * @summary 소켓 테스트
 */
export const apiStaticGetResponse = zod.any()

/**
 * @summary 이벤트 시작
 */
export const apiEventEventIdStartGetParams = zod.object({
  event_id: zod.string(),
})

export const apiEventEventIdStartGetResponse = zod.any()

/**
 * @summary 퀴즈 시작
 */
export const apiEventEventIdStartQuizGetParams = zod.object({
  event_id: zod.string(),
})

export const apiEventEventIdStartQuizGetResponse = zod.any()

/**
 * @summary 조 나눠서 세션 시작
 */
export const apiEventEventIdStartSessionGetParams = zod.object({
  event_id: zod.string(),
})

export const apiEventEventIdStartSessionGetResponse = zod.any()

/**
 * @summary 네트워킹 시작
 */
export const apiEventEventIdStartNetworkingGetParams = zod.object({
  event_id: zod.string(),
})

export const apiEventEventIdStartNetworkingGetResponse = zod.any()
