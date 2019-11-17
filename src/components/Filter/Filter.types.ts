import { BoxProps } from '../Box/Box.types'
import { Filter } from '../../store/modules/types'
import React, { HTMLAttributes } from 'react'
import { ColorProps, DisplayProps, SpaceProps } from 'styled-system'

export type FilterProps = BoxProps & {
  filter: Filter,
  changeModulesFilter: (filter: Filter) => void,
}

export type ItemBaseProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
  active?: boolean
}

export type FilterListProps =
  ColorProps &
  SpaceProps &
  DisplayProps &
  HTMLAttributes<any>
