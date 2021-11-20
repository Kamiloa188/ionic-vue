import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            count: 10
        }
    },

    // ACCIONES son asincrónico
    actions: {
        up({ commit }) {
            commit('up')
        },
        down({ commit }) {
            commit('down')
        }
    },
    // MUTACIONES, (solo pueden poner o modificar el estado)
    mutations: {
        up(state: any) {
            state.count = state.count + 1
        },
        down(state: any) {
            state.count = state.count - 1
        }
    }
})