import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import shop from './moudules/shop'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        shop
    },
    state,
    mutations,
    actions,
    getters,
})
export default store