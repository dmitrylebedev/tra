import queryString from 'query-string'
import { ANY } from '../store/modules/types'

export const getQuery = (
  locationSearch: string,
  limit: number
) => {
  const searchParams = {
    _start: 0,
    _end: limit
  } as any

  const parsedSearch = queryString.parse(locationSearch)

  for (const param in parsedSearch) {
    switch (param) {
      case 'page': {
        const offset = Number(parsedSearch[param]) * limit
        const startValue = offset

        searchParams['_start'] = startValue
        searchParams['_end'] = offset + limit
        break
      }
      case 'sort': {
        searchParams['_sort'] = parsedSearch[param]
        break
      }
      case 'order': {
        searchParams['_order'] = parsedSearch[param]
        break
      }
      case 'q': {
        if (parsedSearch[param]) {
          searchParams['q'] = parsedSearch[param]
        }
        break
      }
      case 'assemblyStatus': {
        if (parsedSearch[param] !== ANY) {
          searchParams['assemblyStatus'] = parsedSearch[param]
        }
        break
      }
      case 'reviewStatus': {
        if (parsedSearch[param] !== ANY) {
          searchParams['reviewStatus'] = parsedSearch[param]
        }
        break
      }
      default:
        break
    }
  }

  const urlSearchParams = new URLSearchParams(searchParams)

  return `?${urlSearchParams.toString()}`
}
