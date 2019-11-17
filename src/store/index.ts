import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { modulesReducer } from './modules/reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import {
  getModulesEpic,
  changeNextModulesPageEpic,
  changeModulesSortingEpic,
  searchModulesEpic,
  changeModulesFilterEpic,
  initEpic
} from '../epics'
import { ModulesState } from './modules/types'
import { History, createBrowserHistory } from 'history'

export type RootState = {
  modules: ModulesState
}

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  modules: modulesReducer
})

const epics = combineEpics(
  getModulesEpic,
  changeNextModulesPageEpic,
  changeModulesSortingEpic,
  searchModulesEpic,
  changeModulesFilterEpic,
  initEpic
)

export const history = createBrowserHistory()

const epicMiddleware = createEpicMiddleware()

export const configureStore = () => {
  const store = createStore(
    rootReducer(history),
    applyMiddleware(
      routerMiddleware(history),
      epicMiddleware
    )
  )

  epicMiddleware.run(epics)

  return store
}
