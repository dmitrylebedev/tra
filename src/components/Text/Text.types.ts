import { HTMLAttributes } from 'react'
import { BoxProps } from '../Box/Box.types'

export type TextProps = BoxProps &
  {
    as?:
      | 'p'
      | 'small'
      | 'strong'
      | 'em'
      | 'span'
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | 'label'
    target?: string
    singleLine?: boolean
  } &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLLabelElement>
