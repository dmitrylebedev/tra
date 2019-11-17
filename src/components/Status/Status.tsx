import React, { FC } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import Box from '../Box'
import Text from '../Text'
import { BoxProps } from '../Box/Box.types'
import { themeGet } from '../../helpers'

type StatusProps = BoxProps

const StatusBase: FC<StatusProps> = ({ children, ...rest }) => {
  return (
    <Box {...rest}>
      <Text variant="black11">{children}</Text>
    </Box>
  )
}

export default styled(StatusBase)`
  box-sizing: border-box; 
  display: inline-flex;
  align-items: center;
  padding: 4px 6px;
  border: ${themeGet('borders.status')};
  border-radius: ${themeGet('radii.3')};
  ${variant({
    variants: {
      IN_REVIEW: {
        backgroundColor: 'yellow.100',
        borderColor: 'gray.600'
      },
      REVIEW_FINISHED: {
        backgroundColor: 'white',
        borderColor: 'gray.400'
      }
    }
  })}
`
