import { Module, ModulesState } from '../../store/modules/types'
import { BoxProps } from '../Box/Box.types'

export type CardListItemProps = BoxProps & {
  module: Module
}

export type CardListBaseProps = {
  modules: ModulesState
}
