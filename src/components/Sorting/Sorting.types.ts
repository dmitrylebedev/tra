import { BoxProps } from '../Box/Box.types'
import { Sorting } from '../../store/modules/types'

export type SortingProps = BoxProps & {
  sorting: Sorting,
  changeModulesSorting: (sorting: Sorting) => void,
}
