import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  count: 0
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setCounter(state, count: number) {
    state.count = count
  }
}

export const actions: ActionTree<RootState, RootState> = {
  incrementCount(context) {
    context.commit('setCounter', context.state.count + 1)
  },
  decrementCount(context) {
    context.commit('setCounter', context.state.count - 1)
  }
}

export const getters: GetterTree<RootState, RootState> = {
  getCount: (state) => state.count
}
