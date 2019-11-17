import {
  BackgroundProps,
  ButtonStyleProps,
  ColorProps,
  ColorStyleProps,
  FlexboxProps,
  LayoutProps,
  OpacityProps,
  PositionProps,
  SpaceProps,
  TextStyleProps,
  TypographyProps,
  BorderProps
} from 'styled-system'
import { HTMLAttributes } from 'react'

export type BoxProps = BackgroundProps &
  ButtonStyleProps &
  ColorProps &
  ColorStyleProps &
  FlexboxProps &
  LayoutProps &
  OpacityProps &
  PositionProps &
  SpaceProps &
  TextStyleProps &
  TypographyProps &
  BorderProps &
  HTMLAttributes<any>
