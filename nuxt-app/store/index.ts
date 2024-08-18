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
  // 필요한 경우 액션을 추가하세요
}

export const getters: GetterTree<RootState, RootState> = {
  getCount: (state) => state.count
}
