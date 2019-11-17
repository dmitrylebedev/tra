import { ModulesState, URLSearch } from '../../store/modules/types'

export type AppProps = {
  getModules: () => void,
  init: (urlSearch: URLSearch) => void,
  changeNextModulesPage: () => void,
  modules: ModulesState
}
