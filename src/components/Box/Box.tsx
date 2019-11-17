import styled from 'styled-components'
import {
  background,
  color,
  compose,
  flexbox,
  layout,
  opacity,
  position,
  space,
  typography,
  textStyle,
  buttonStyle,
  colorStyle,
  border
} from 'styled-system'
import { BoxProps } from './Box.types'

const boxStyles = compose(
  background,
  buttonStyle,
  color,
  colorStyle,
  flexbox,
  layout,
  opacity,
  position,
  space,
  textStyle,
  typography,
  border
)

const Box = styled.div<BoxProps>`
 box-sizing: border-box;
 ${boxStyles}
`

export default Box
