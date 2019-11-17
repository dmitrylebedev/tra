import React, { FC, ButtonHTMLAttributes } from 'react'
import styled  from 'styled-components'

type ButtonProps = ButtonHTMLAttributes<any>

const ButtonBase: FC<ButtonProps> = ({ type, onClick, children}) => {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const Button = styled(ButtonBase)`
  position: relative;
  font-size: 13px;
  line-height: 18px;
  border-radius: 60px;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
`

export default Button
