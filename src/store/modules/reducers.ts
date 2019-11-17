import {
  ANY,
  CHANGE_MODULES_FILTER,
  CHANGE_MODULES_SORTING,
  GET_MODULES,
  GET_MODULES_ERROR,
  GET_MODULES_SUCCESS,
  INIT,
  ModulesActionType,
  ModulesState,
  SEARCH_MODULES,
  assemblyStatuses,
  reviewStatuses,
  ReviewStatus,
  AssemblyStatus
} from './types'
import { sortingOrder } from '../../config'

const initialState: ModulesState = {
  data: [],
  total: '0',
  hasMore: true,
  hasError: false,
  page: 0,
  limit: 10,
  loading: true,
  error: null,
  sorting: {
    type: 'updated',
    order: sortingOrder.defaultValue[0]
  },
  filter: {
    assemblyStatus: ANY,
    reviewStatus: ANY
  },
  search: ''
}

export const modulesReducer = (
  state = initialState,
  action: ModulesActionType
): ModulesState => {
  switch (action.type) {
    case GET_MODULES: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_MODULES_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [
          ...state.data,
          ...action.payload.data
        ],
        total: action.payload.total,
        page: state.page + 1,
        hasMore: action.payload.data.length === initialState.limit &&
          !!action.payload.data.length
      }
    }
    case GET_MODULES_ERROR: {
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.payload
      }
    }
    case CHANGE_MODULES_SORTING: {
      return {
        ...state,
        page: initialState.page,
        data: initialState.data,
        loading: true,
        sorting: {
          type: action.payload.type,
          order: action.payload.order === sortingOrder.defaultValue[0]
            ? sortingOrder.defaultValue[1]
            : sortingOrder.defaultValue[0]
        }
      }
    }
    case CHANGE_MODULES_FILTER: {
      return {
        ...state,
        page: initialState.page,
        data: initialState.data,
        loading: true,
        filter: {
          assemblyStatus: action.payload.assemblyStatus,
          reviewStatus: action.payload.reviewStatus
        }
      }
    }

    case SEARCH_MODULES: {
      return {
        ...state,
        page: initialState.page,
        data: initialState.data,
        search: action.payload
      }
    }
    case INIT: {
      let page = initialState.page
      let sorting = initialState.sorting
      let search = initialState.search
      let filter = initialState.filter
      let params = new URLSearchParams(`${action.payload}`)

      if (params.has('sort')) {
        sorting = {
          ...sorting,
          type: initialState.sorting.type
        }
      }

      if (params.has('order')) {
        sorting = {
          ...sorting,
          order: ((sortingOrder.defaultValue.includes(params.get('order') || initialState.sorting.order)) &&
            params.get('order')) || initialState.sorting.order
        }
      }

      if (params.has('assemblyStatus')) {
        let assemblyStatus = params.get('assemblyStatus') as AssemblyStatus

        assemblyStatus = ((assemblyStatuses.includes(assemblyStatus || initialState.filter.assemblyStatus)) &&
          assemblyStatus) || initialState.filter.assemblyStatus

        filter = {
          ...filter,
          assemblyStatus
        }
      }

      if (params.has('reviewStatus')) {
        let reviewStatus = params.get('reviewStatus') as ReviewStatus

        reviewStatus = ((reviewStatuses.includes(reviewStatus || initialState.filter.reviewStatus)) &&
          reviewStatus) || initialState.filter.reviewStatus

        filter = {
          ...filter,
          reviewStatus
        }
      }

      if (params.has('q')) {
        search = params.get('q') || initialState.search
      }

      if (params.has('page')) {
        page = Number(params.get('page')) || initialState.page
      }

      return {
        ...state,
        page,
        search,
        sorting,
        filter
      }
    }
    default: {
      return state
    }
  }
}
