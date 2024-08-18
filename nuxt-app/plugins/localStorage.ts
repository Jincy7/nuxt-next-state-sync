import { Plugin } from '@nuxt/types'
import { LocalStorageService } from '~/services/localStorage'

const localStoragePlugin: Plugin = ({ store }) => {
  new LocalStorageService(store)
}

export default localStoragePlugin