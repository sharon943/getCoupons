/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = 'https://api.v-ka.com';
// let baseUrl = 'https://api.vi-ni.com'; //打包测试地址
let accessToken='';
let routerMode = 'history';
let baseImgPath='';
let warm='您长时间未操作，需要重新登录'
let obj={}
let isweixn=1
export default {
  baseUrl,
  routerMode,
  baseImgPath,
  accessToken,
  warm,
  obj,
  isweixn
}
