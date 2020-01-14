import {getShopDatas} from '../../api/index'
import Vue from 'vue'
import {
    SAVE_SHOPDATAS,
    ADD_FOOD_COUNT,
    DEL_FOOD_COUNT
} from '../mutations_type'
const state = {
    shopDatas:{}//商家数据
}
const mutations = {
    [SAVE_SHOPDATAS](state,shopDatas){
        state.shopDatas = shopDatas
    },
    [ADD_FOOD_COUNT](state,{food}){
        if (food.count > 0) {
            food.count++
        }else{
            Vue.set(food,'count',1)
        }
    },
    [DEL_FOOD_COUNT](state,{food}){
        if (food.count > 0) {
            food.count--
        }
    }
}
const actions = {
    async getShopDatasAction({commit}){
        let result = await getShopDatas()
        if (result.code === 0) {
            commit(SAVE_SHOPDATAS,result.data)
        }
    },
    async changeFoodCount({commit},{food,isAdd}){
        if (isAdd) {
            commit(ADD_FOOD_COUNT,{food})
        }else{
            commit(DEL_FOOD_COUNT,{food})
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