import styled  from 'styled-components'
import { TextProps } from './Text.types'
import Box from '../Box'
import { variant } from 'styled-system'

const Text = styled(Box)<TextProps>(
  variant({
    variants: {
      gray14: {
        fontSize: 14,
        lineHeight: '24px',
        color: 'gray.100'
      },
      white12: {
        fontSize: 12,
        lineHeight: '14px',
        color: 'white'
      },
      black11: {
        fontSize: 11,
        lineHeight: '13px',
        color: 'black.0',
        letterSpacing: '0.2px',
        fontWeight: 700
      }
    }
  })
)

Text.defaultProps = {
  as: 'span',
}

export default Text
