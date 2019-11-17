import React, { FC } from 'react'
import { RowProps } from './Row.types'
import Flex from '../Flex'

const Row: FC<RowProps> = ({ children, ...rest }) => {
  return (
    <Flex flexWrap="wrap" {...rest}>
      {children}
    </Flex>
  )
}

export default Row
