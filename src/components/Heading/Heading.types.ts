import { TextProps } from '../Text/Text.types'
import { HTMLAttributes } from 'react'

export type HeadingProps = TextProps &
  HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
