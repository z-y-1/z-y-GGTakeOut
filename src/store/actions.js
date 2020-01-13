import {getAddress,getCate, getShopList} from '../api';
import {
    SAVE_ADDRESS,SAVE_CATE,SAVE_SHOPLIST,SAVE_USER,SAVE_TOKEN
} from './mutations_type'
export default {
    async getAddressAction({commit}){
        let result = await getAddress(40.10038,116.36867)
        
        !!(result.code === 0) && commit(SAVE_ADDRESS,result.data)
    },
    async getCateAction({commit},fn){
        let result = await getCate()
        if((result.code === 0)){
            commit(SAVE_CATE, result.data)
            typeof fn === 'function' && fn()
          }
        
    },
    async getShopListAction({commit}){
        let result = await getShopList(40.10038,116.36867)
        !!(result.code === 0) && commit(SAVE_SHOPLIST,result.data)
    },
    async getUserAction({commit},user){
        commit(SAVE_TOKEN,user.token)
        localStorage.setItem('token_key',user.token)
        delete user.token
        commit(SAVE_USER,user)
    }
}
