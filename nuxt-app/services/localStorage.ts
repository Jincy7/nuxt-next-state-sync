import { Store } from 'vuex'

export interface StorageData {
  state: {
    count: number
  }
  version: number
}

export class LocalStorageService {
  private store: Store<any>
  private key: string

  constructor(store: Store<any>, key: string = 'counter-storage') {
    this.store = store
    this.key = key
    this.init()
  }

  private init() {
    this.loadFromStorage()
    this.store.subscribe((mutation, state) => {
      if (mutation.type === 'setCounter') {
        this.saveToStorage(state.count)
      }
    })
  }

  private loadFromStorage() {
    if (process.client) {
      const storedData = localStorage.getItem(this.key)
      if (storedData) {
        try {
          const parsedData: StorageData = JSON.parse(storedData)
          this.store.commit('setCounter', parsedData.state.count)
        } catch (error) {
          console.error('로컬 스토리지 데이터 파싱 오류:', error)
        }
      }
    }
  }

  private saveToStorage(count: number) {
    if (process.client) {
      const data: StorageData = {
        state: { count },
        version: 0
      }
      localStorage.setItem(this.key, JSON.stringify(data))
    }
  }
}
