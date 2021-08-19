import YdRequest from '../index'
import { IAccount, ILoginResult } from './types'
import { IDataType } from '../types'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return YdRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return YdRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return YdRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}
