import {getShopDatas} from '../../api/index'
import {
    SAVE_SHOPDATAS
} from '../mutations_type'
const state = {
    shopDatas:{}//商家数据
}
const mutations = {
    [SAVE_SHOPDATAS](state,shopDatas){
        state.shopDatas = shopDatas
    }
}
const actions = {
    async getShopDatasAction({commit}){
        let result = await getShopDatas()
        if (result.code === 0) {
            commit(SAVE_SHOPDATAS,result.data)
        }
    }

}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}