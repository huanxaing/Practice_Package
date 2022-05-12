import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        sl: '',
        id: 0,
        num: 'qb'
    },
    mutations: {
        sd(state, val) {
            state.list = val
        },
        sdd(state, val) {
            state.list.push(val)
        },
        de(state) {
            for (var i = 0; i < state.list.length - 1; i++) {
                state.list[i].id = i
            }
        },
        dell(state) {
            state.list = state.list.filter(x => x.done === false)
        }
    },
    actions: {
        sa(context) {
            axios.get('/list.json').then(({ data }) => {
                console.log(data);
                context.commit('sd', data)
            })
        }
    },
    getters: {
        qh(state) {
            if (state.num === 'qb') {
                return state.list
            }
            if (state.num === 'yj') {
                return state.list = state.list.filter(x => !x.done)
            }
            if (state.num === 'my') {
                return state.list = state.list.filter(x => x.done)
            }
            return state.list
        }
    }
})