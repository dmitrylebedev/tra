import {
  GET_MODULES,
  GET_MODULES_SUCCESS,
  GET_MODULES_ERROR,
  CHANGE_MODULES_SORTING,
  SEARCH_MODULES,
  INIT,
  ModulesResponse,
  Sorting,
  URLSearch,
  Filter,
  CHANGE_NEXT_MODULES_PAGE,
  CHANGE_MODULES_FILTER
} from './types'

export const getModules = () => ({
  type: GET_MODULES
})

export const changeNextModulesPage = () => ({
  type: CHANGE_NEXT_MODULES_PAGE
})

export const init = (urlSearch: URLSearch) => ({
  type: INIT,
  payload: urlSearch
})

export const getModulesSuccess = (newModules: ModulesResponse) => ({
  type: GET_MODULES_SUCCESS,
  payload: newModules
})

export const getModulesError = (error: Error) => ({
  type: GET_MODULES_ERROR,
  payload: error
})

export const changeModulesSorting = (sorting: Sorting) => ({
  type: CHANGE_MODULES_SORTING,
  payload: sorting
})

export const changeModulesFilter = (filter: Filter) => ({
  type: CHANGE_MODULES_FILTER,
  payload: filter
})

export const searchModules = (search: string) => ({
  type: SEARCH_MODULES,
  payload: search
})
