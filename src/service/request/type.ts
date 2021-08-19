import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YdRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface YdRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YdRequestInterceptors<T>
  showLoading?: boolean
}
