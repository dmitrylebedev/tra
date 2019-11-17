import React from 'react'
import icons from './icons'
import { IconType } from './Icon.types'

interface Props {
  icon: IconType,
  color: string
}

const Icon = ({ icon, color }: Props) => {
  const Component = icons[icon]

  return <Component color={color} />
}

Icon.defaultProps = {
  color: ''
}

export default Icon
