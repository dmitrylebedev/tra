export const IN_REVIEW = 'IN_REVIEW'
export const REVIEW_FINISHED = 'REVIEW_FINISHED'
export const ANY = 'ANY'
export const DRAFT = 'DRAFT'
export const SOLVED = 'SOLVED'
export const SIMULATION_REQUESTED = 'SIMULATION_REQUESTED'
export const SIMULATION_POSITIVE = 'SIMULATION_POSITIVE'
export const SIMULATION_NEGATIVE = 'SIMULATION_NEGATIVE'

export const assemblyStatuses = [ ANY, IN_REVIEW, REVIEW_FINISHED ]
export const reviewStatuses = [ ANY, DRAFT, SOLVED, SIMULATION_REQUESTED, SIMULATION_POSITIVE, SIMULATION_NEGATIVE ]

export type AssemblyStatus = typeof IN_REVIEW |
  typeof REVIEW_FINISHED | typeof ANY

export type ReviewStatus = typeof DRAFT |
  typeof SOLVED |
  typeof SIMULATION_REQUESTED |
  typeof SIMULATION_POSITIVE |
  typeof SIMULATION_NEGATIVE |
  typeof ANY

export interface Module {
  _id: string,
  img: string
  age: number,
  assemblyStatus: AssemblyStatus,
  reviewStatus: ReviewStatus,
  title: string,
  updated: string
}

export type Sorting = {
  type: string,
  order: string
}

export type Filter = {
  assemblyStatus: AssemblyStatus,
  reviewStatus: ReviewStatus
}

export type querySearch = string
export type URLSearch = string
export type Total = string | null

export type ModulesResponse = {
  data: Module[],
  total: Total
}

export interface ModulesState {
  data: Module[],
  total: Total,
  hasMore: boolean,
  hasError: boolean,
  page: number,
  limit: number,
  loading: boolean,
  error: null | Error,
  sorting: Sorting,
  filter: Filter,
  search: querySearch
}

export const GET_MODULES = 'GET_MODULES'
export const GET_MODULES_SUCCESS = 'GET_MODULES_SUCCESS'
export const GET_MODULES_ERROR = 'GET_MODULES_ERROR'
export const CHANGE_MODULES_SORTING = 'CHANGE_MODULES_SORTING'
export const SEARCH_MODULES = 'SEARCH_MODULES'
export const INIT = 'INIT'
export const CHANGE_NEXT_MODULES_PAGE = 'CHANGE_NEXT_MODULES_PAGE'
export const CHANGE_MODULES_FILTER = 'CHANGE_MODULES_FILTER'

interface changeNextModulesPageAction {
  type: typeof CHANGE_NEXT_MODULES_PAGE
}

interface GetModulesSuccessAction {
  type: typeof GET_MODULES_SUCCESS
  payload: ModulesResponse
}

interface GetModulesErrorAction {
  type: typeof GET_MODULES_ERROR
  payload: Error
}

interface GetModulesAction {
  type: typeof GET_MODULES
}

interface ChangeModulesSortingAction {
  type: typeof CHANGE_MODULES_SORTING,
  payload: Sorting
}

interface ChangeModulesSearchAction {
  type: typeof SEARCH_MODULES,
  payload: querySearch
}

interface ChangeModulesFilterAction {
  type: typeof CHANGE_MODULES_FILTER,
  payload: Filter
}

interface Init {
  type: typeof INIT,
  payload: URLSearch
}

export type ModulesActionType = GetModulesAction |
  GetModulesSuccessAction |
  GetModulesErrorAction |
  ChangeModulesSortingAction |
  ChangeModulesSearchAction |
  changeNextModulesPageAction |
  ChangeModulesFilterAction |
  Init
