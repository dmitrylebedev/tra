import React, { FC } from 'react'
import styled, { css }  from 'styled-components'
import nanoid from 'nanoid'
import {
  space,
  color,
  display,
  compose
} from 'styled-system'
import Box from '../../Box'
import Text from '../../Text'
import { ItemBaseProps, FilterListProps } from '../Filter.types'
import { themeGet } from '../../../helpers'

const ItemBase: FC<ItemBaseProps> = ({ children, onClick, ...rest }) => {
  const id = nanoid()

  return (
    <Box key={id} onClick={onClick} {...rest}>
      <Text variant="gray14">{children}</Text>
    </Box>
  )
}

export const FilterListItem = styled(ItemBase)`
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  border-left: ${themeGet('borders.filterItemDefault')};;
  ${({ active }) => active && css`
    border-left: ${themeGet('borders.filterItemActive')};
  `}
`

const FilterListBase: FC = ({ children, ...rest }) => {
  const items = React.Children.map(children, child => {
    return <li>{child}</li>
  })

  return (
    <ul {...rest}>
      {items}
    </ul>
  )
}

const filterListStyles = compose(
  space,
  color,
  display
)

export const FilterList = styled(FilterListBase)<FilterListProps>`
  list-style-type: none;
  ${filterListStyles}
  
  li {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

FilterList.defaultProps = {
  mb: 0,
  mt: 0,
  p: 0
}
