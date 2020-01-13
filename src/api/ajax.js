import axios from 'axios'
import qs from 'querystring'
import router from '../router'

const instance = axios.create({
    baseURL:'/api'
})
//请求拦截器
instance.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    let token = localStorage.getItem('token_key');
    if (config.headers.needToken) {
        if (token) {
            config.headers.authorization = token
        }else{
            throw Error('请先登录')
        }
    }
    return config
});
//响应拦截器
instance.interceptors.response.use(
    response => response.data,
    err => {
        if(!err.response){
            alert(err.message)
            if(router.currentRoute.path !== '/login'){
                router.replace('/login')
            }
        }else{
            if (err.response.status === 401) {
                alert('token过期 从新登陆')
                if(router.currentRoute.path === '/login'){
                    router.replace('/login')
                }
            }else if (err.response.status === 404){
                alert('请求资源未找到')
                router.replace('/login')
            }else{
                alert('请求出错')
                router.replace('/login')
            }
        }
        return new Promise(() => {})
    }
)

export default instance