import { HTMLAttributes } from 'react'
import { BoxProps } from '../Box/Box.types'

export type ImgProps = BoxProps &
  HTMLAttributes<HTMLImageElement> & {
  src: string,
  alt: string
}
