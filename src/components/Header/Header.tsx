import React, { FC } from 'react'
import styled from 'styled-components'
import {
  space,
  background,
  shadow,
  fontSize,
  compose
} from 'styled-system'
import { HeaderProps } from './Header.types'
import Logo from '../Logo'
import { themeGet } from '../../helpers'

const headerStyles = compose(
  space,
  background,
  shadow,
  fontSize
)

const Header: FC = ({ ...rest }) => {
  return (
    <header { ...rest }>
      <Logo/>
    </header>
  )
}

export default styled(Header)<HeaderProps>`
  box-sizing: border-box;
  padding: 24px 18px;
  margin-bottom: 24px;
  box-shadow: ${themeGet('shadows.1')};
  font-size: 0;
  ${headerStyles}
`
