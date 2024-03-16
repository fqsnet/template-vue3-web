import Request from './request'
import { AxiosResponse } from 'axios'
import { requestTimeout } from '@/config'

import type { RequestConfig } from './types'

export interface ResponseType<T> {
  statusCode: number
  desc: string
  result: T
}

// 重写返回类型
interface requestConfig<T, R> extends RequestConfig<ResponseType<R>> {
  data?: T
}

const requestIns = new Request({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: requestTimeout,
  interceptors: {
    // 实例请求拦截器
    requestInterceptors: config => {
      return config
    },
    // 实例响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    }
  }
})

const request = <D = any, T = any>(config: requestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return requestIns.request<ResponseType<T>>(config)
}

export default request
