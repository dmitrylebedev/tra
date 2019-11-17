import React, { FC } from 'react'
import { SwitchProps } from './Switch.types'
import styled, { css } from 'styled-components'
import { themeGet } from '../../helpers'

const SwitchBtn = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
  background-color: transparent;
  padding: 0 18px;
  border-radius: 20px;
  box-shadow: none;
  font-size: 14px;
  line-height: 24px;
  color: ${themeGet('colors.gray.200')};
  cursor: pointer;
  
  & + & {
    background-color: ${themeGet('colors.white')};
    border-radius: 20px;
    box-shadow: ${themeGet('shadows.3')};
    color: ${themeGet('colors.black.0')};
  }
`

const SwitchInput = styled.input`
  appearance: none;
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;

  ${(props) => props.checked && css`
    & + ${SwitchBtn} {
      background-color: ${themeGet('colors.white')};
      box-shadow: ${themeGet('shadows.3')};
      color: ${themeGet('colors.black.0')};
    }
    
    & + ${SwitchBtn} + ${SwitchBtn} {
      background-color: transparent;
      box-shadow: none;
      color: ${themeGet('colors.gray.200')};
    }
  `}
`

const SwitchBase: FC<SwitchProps> = ({ children, checked, onChange, ...rest }) => {
  const items = React.Children.map(children, child => {
    return <SwitchBtn>{child}</SwitchBtn>
  })

  return (
    <label {...rest}>
      <>
        <SwitchInput
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        {items}
      </>
    </label>
  )
}

export const Switch = styled(SwitchBase)`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 32px;
  cursor: pointer;
  background: ${themeGet('colors.gray.700')};
  border-radius: 20px;
`

export default Switch
