import YdRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return YdRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
