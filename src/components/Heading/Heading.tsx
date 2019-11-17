import styled from 'styled-components'
import { variant } from 'styled-system'
import { HeadingProps } from './Heading.types'
import Text from '../Text'

const Heading = styled(Text)<HeadingProps>(
  {
    display: 'block'
  },
  variant({
    variants: {
      h1: {
        fontFamily: 'title',
        fontSize: 24,
        lineHeight: '24px',
        fontWeight: 500,
        color: 'black.50'
      },
      h2: {
        fontFamily: 'title',
        fontSize: '18px',
        lineHeight: '18px',
        fontWeight: 500,
        color: 'black.50'
      },
      h4: {
        fontSize: 11,
        lineHeight: '13px',
        fontWeight: 500,
        color: 'gray.250',
        marginBottom: '14px'
      }
    }
  })
)

Heading.defaultProps = {
  mb: 0,
  mt: 0,
  as: 'h2',
  variant: 'h2'
}

export default Heading
