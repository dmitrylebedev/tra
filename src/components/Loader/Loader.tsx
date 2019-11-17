import React, { FC } from 'react'
import Text from '../Text'
import Box from '../Box'

const Loader: FC = () => {
  return (
    <Box my="20px">
      <Text variant="gray14">
        Loading...
        <span role="img" aria-label="loading">🚚</span>
      </Text>
    </Box>
  )
}

export default Loader
