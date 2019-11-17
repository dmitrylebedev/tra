import { ComponentType } from 'react'
import { SVGProps } from '../Icon.types'

import Search from './Search'
import TRA from './TRA'

interface IconsSet {
  [type: string]: ComponentType<SVGProps>
}

const icons: IconsSet = {
  search: Search,
  tra: TRA
}

export default icons
