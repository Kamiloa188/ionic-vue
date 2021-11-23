import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            count: 0
        }
    },

    // ACCIONES son asincrónico
    actions: {
        up({ commit }, payLoad) {
            commit('up', payLoad)
        },
        down({ commit }) {
            commit('down')
        },
        changeValue({ commit }, payLoad) {
            commit('changeValue', payLoad)
        }
    },
    // MUTACIONES, (solo pueden poner o modificar el estado)
    mutations: {
        up(state: any) {

            const value = parseInt(state.count)
            state.count = value + 1

            console.log('state.count :>> ', state.count + 1);
        },
        down(state: any) {
            state.count = state.count - 1
            console.log('state.count :>> ', state.count);
        },

        changeValue(state: any, payLoad: any) {
            state.count = payLoad.value
            console.log('payLoad :>> ', payLoad.value);
        }
    }
})