import { BoxProps } from '../Box/Box.types'
import { ReviewStatus } from '../../store/modules/types'

export type SpecBaseProps = BoxProps & {
  reviewStatus: ReviewStatus,
  updated: string
}
