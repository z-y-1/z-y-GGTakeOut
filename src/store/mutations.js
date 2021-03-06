import {SAVE_ADDRESS} from './mutations_type';
import {SAVE_CATE,SAVE_SHOPLIST,SAVE_USER,SAVE_TOKEN,LOGOUT} from './mutations_type'
export default {
    [SAVE_ADDRESS](state,address){
        state.address = address
    },
    [SAVE_CATE](state,categorys){
        state.categorys = categorys
    },
    [SAVE_SHOPLIST](state,shopList){
        state.shopList = shopList
    },
    [SAVE_USER](state,user){
        state.user = user
    },
    [SAVE_TOKEN](state,token){
        state.token = token
    },
    [LOGOUT](state){
        state.user = {}
        state.token = ''
        // 情况localStorage中的token
        localStorage.removeItem('token_key')
    }
}