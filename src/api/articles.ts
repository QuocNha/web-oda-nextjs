import { AxiosResponse } from 'axios'
import request from 'src/utils/request'
import { IArticleInfo } from 'src/types/articles'

const URL = '/articles'
const articles = {
  getAll(params): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.get(URL, { params })
  },
  getByID(id: string): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.get(`${URL}/${id}`)
  },
  add(params): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.post(URL, { params })
  },
  update(data): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.patch(URL, data)
  },
  remove(id: string): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.delete(`${URL}/${id}`)
  },
}
export default articles
