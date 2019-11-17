import React, { FC } from 'react'
import Text from '../Text'
import Flex from '../Flex'

const Badge: FC = ({ children }) => {
  return (
    <Flex
      alignItems="center"
      bg="gray.200"
      borderRadius="14"
      padding="3px 7px"
    >
      <Text
        variant="white12"
      >
        {children}
      </Text>
    </Flex>
  )
}

export default Badge
