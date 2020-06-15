import { request } from './request';


/**
 * 获取
 */
export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
    baseURL: 'http://123.207.32.32:8000'
  })
}
/**
 * 获取商品数据(接口)
 * @param {*} type 
 * @param {*} page 
 */
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}