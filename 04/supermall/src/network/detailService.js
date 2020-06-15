import { request } from './request'

/**
 * 获取商品数据(接口)
 * @param {*} type 
 * @param {*} page 
 */
export function getDetail(id) {
  return request({
    url: '/detail',
    params: {
      iid: id
    }
  })
}