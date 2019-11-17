import React, { useContext, FC } from 'react'
import { ThemeContext } from 'styled-components'
import Box from '../Box'

const Contain: FC = props => {
  const themeContext = useContext(ThemeContext)

  return (
    <Box
      mx="auto"
      px={
        themeContext &&
        themeContext.grid &&
        themeContext.grid.container &&
        themeContext.grid.container.padding
      }
      maxWidth={
        themeContext &&
        themeContext.grid &&
        themeContext.grid.container &&
        themeContext.grid.container.maxWidth
      }
      {...props}
    />
  )
}

export default Contain
