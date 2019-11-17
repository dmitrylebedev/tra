import React, { FC } from 'react'
import styled from 'styled-components'
import { ImgProps } from './ImgBox.types'
import Box from '../Box'
import { width, height, compose } from 'styled-system'

const imgStyles = compose(
  width,
  height
)

const ImgBoxBase: FC<ImgProps> = ({ src, alt, ...rest }) => {
  return (
    <Box {...rest}>
      <img src={src} alt={alt}/>
    </Box>
  )
}

export const ImbBox = styled(ImgBoxBase)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${imgStyles}
`

export default ImbBox
