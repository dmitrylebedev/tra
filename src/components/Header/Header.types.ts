import { BackgroundProps, FontSizeProps, ShadowProps, SpaceProps } from 'styled-system'
import { HTMLAttributes } from 'react'

export type HeaderProps = BackgroundProps &
  SpaceProps &
  ShadowProps &
  FontSizeProps &
  HTMLAttributes<any>
