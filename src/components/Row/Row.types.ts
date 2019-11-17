import { FlexboxProps, SpaceProps } from 'styled-system'
import { HTMLAttributes } from 'react'

export type RowProps = FlexboxProps &
  SpaceProps &
  HTMLAttributes<any>
