import { Epic, ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { push } from 'connected-react-router'
import {
  GET_MODULES,
  CHANGE_MODULES_SORTING,
  SEARCH_MODULES,
  CHANGE_NEXT_MODULES_PAGE,
  INIT,
  CHANGE_MODULES_FILTER
} from '../store/modules/types'
import { getModulesSuccess, getModulesError } from '../store/modules/actions'
import * as api from '../helpers/api'
import { getQuery } from '../helpers'

const initEpic: Epic = (action$, state$) => action$.pipe(
  ofType(INIT),
  map(() => {
    const { modules } = state$.value

    const paramsString = `page=${modules.page}&sort=${modules.sorting.type}&order=${modules.sorting.order}&assemblyStatus=${modules.filter.assemblyStatus}&reviewStatus=${modules.filter.reviewStatus}`

    const searchParams = new URLSearchParams(paramsString)

    if (modules.search.length) {
      searchParams.set('q', modules.search)
    }

    return push({
      search: `?${searchParams.toString()}`
    })
  })
)

const changeNextModulesPageEpic: Epic = (action$, state$) => action$.pipe(
  ofType(CHANGE_NEXT_MODULES_PAGE),
  map(() => {
    const { router, modules } = state$.value
    const urlSearchParams = new URLSearchParams(router.location.search)

    urlSearchParams.set('page', `${modules.page}`)

    return push({ search: `?${urlSearchParams.toString()}` })
  })
)

const changeModulesSortingEpic: Epic = (action$, state$) => action$.pipe(
  ofType(CHANGE_MODULES_SORTING),
  map(() => {
    const { router, modules } = state$.value
    const urlSearchParams = new URLSearchParams(router.location.search)

    urlSearchParams.set('sort', `${modules.sorting.type}`)
    urlSearchParams.set('order', `${modules.sorting.order}`)
    urlSearchParams.set('page', `${modules.page}`)

    return push({ search: `?${urlSearchParams.toString()}` })
  })
)

const changeModulesFilterEpic: Epic = (action$, state$) => action$.pipe(
  ofType(CHANGE_MODULES_FILTER),
  map(() => {
    const { router, modules } = state$.value
    const urlSearchParams = new URLSearchParams(router.location.search)

    urlSearchParams.set('assemblyStatus', `${modules.filter.assemblyStatus}`)
    urlSearchParams.set('reviewStatus', `${modules.filter.reviewStatus}`)
    urlSearchParams.set('page', `${modules.page}`)

    return push({ search: `?${urlSearchParams.toString()}` })
  })
)


const searchModulesEpic: Epic = (action$, state$) => action$.pipe(
  ofType(SEARCH_MODULES),
  map(() => {
    const { router, modules } = state$.value
    const urlSearchParams = new URLSearchParams(router.location.search)

    if (modules.search) {
      urlSearchParams.set('q', `${modules.search}`)
    } else {
      urlSearchParams.delete('q')
    }

    urlSearchParams.set('page', `${modules.page}`)

    return push({ search: `?${urlSearchParams.toString()}` })
  })
)

const getModulesEpic: Epic = (action$, state$) => {
  return action$.pipe(
    ofType(GET_MODULES),
    mergeMap(() => {
      const { router, modules } = state$.value
      const query = getQuery(router.location.search, modules.limit)

      return from(api.getModules(query)).pipe(
        map(getModulesSuccess),
        catchError(error => {
          console.warn('TRA Assembly: Failed to get modules: %o', error)
          return of(getModulesError(error))
        })
      )
    })
  )
}

export {
  getModulesEpic,
  changeNextModulesPageEpic,
  changeModulesSortingEpic,
  searchModulesEpic,
  changeModulesFilterEpic,
  initEpic
}
