import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YDRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface YDRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YDRequestInterceptors<T>
  showLoading?: boolean
}
