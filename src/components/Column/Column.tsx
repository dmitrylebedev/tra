import styled from 'styled-components'
import { width } from 'styled-system'
import { ColumnProps } from './Column.types'
import Box from '../Box'

const Column = styled(Box)<ColumnProps>`
  ${width}
`

export default Column
