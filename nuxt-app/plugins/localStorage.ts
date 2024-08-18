import { Plugin } from '@nuxt/types'

const localStoragePlugin: Plugin = ({ store }) => {
  if (process.client) {
    const storedData = localStorage.getItem('counter-storage')
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData)
        store.commit('setCounter', parsedData.state.count)
      } catch (error) {
        console.error('로컬 스토리지 데이터 파싱 오류:', error)
      }
    }
  }
}

export default localStoragePlugin