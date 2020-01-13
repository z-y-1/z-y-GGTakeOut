import ajax from './ajax'

//根据经纬度定位头部信息
export const getAddress = (x,y) => ajax({
    url:`/position/${x},${y}`
})

export const getCate = () => ajax({
    url:'/index_category',
    headers: {
        needToken: true
      }
})
//根据经纬度获取商家列表
export const getShopList = (x,y) => ajax( {
    url:'/shops',
    params: {
        x,
        y
    },
    headers: {
        needToken: true
      }
})
//验证码
export const sendCode = phone => ajax({
    url: '/sendcode',
    params: {
        phone
    }
})
export const loginWithUserName = ({username,pwd,captcha}) => ajax({
  url:'/login_pwd',
  method:'POST',
  data:{
      name:username,
      pwd,
      captcha
  },
  headers: {
    needToken: true
  }
})
export const loginWithPhone = ({phone,code}) => ajax({
    url:'/login_sms',
    method:'POST',
    data:{
        phone,
        code
    }
})

export const autoLogin = () => ajax({
    url:'/auto_login',
    headers: {
        needToken: true
      }
})
