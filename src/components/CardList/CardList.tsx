import React, { FC } from 'react'
import styled from 'styled-components'
import { CardListBaseProps, CardListItemProps } from './CardList.types'
import { getAssemblyStatusNames } from '../../config'
import Row from '../Row'
import Column from '../Column'
import Box from '../Box'
import Status from '../Status'
import ImgBox from '../ImgBox'
import Spec from '../Spec'
import Heading from '../Heading'
import { themeGet } from '../../helpers'

const CardListItemBase: FC<CardListItemProps> = ({ module, ...rest }) => {
  const {
    img,
    assemblyStatus,
    reviewStatus,
    title,
    updated
  } = module

  const statusName = getAssemblyStatusNames(assemblyStatus)

  return (
    <Box {...rest}>
      <Row alignItems="center">
        <Column mr={40}>
          <Box>
            <Status
              variant={assemblyStatus}
              position="absolute"
              top="8px"
              left="8px"
            >
              {statusName}
            </Status>
            <ImgBox
              src={img}
              alt={title}
              width={160}
              height={100}
            />
          </Box>
        </Column>
        <Column>
          <Heading mb={10}>{title}</Heading>
          <Spec
            reviewStatus={reviewStatus}
            updated={updated}
          />
        </Column>
      </Row>
    </Box>
  )
}

export const CardListItem = styled(CardListItemBase)`
  display: block;
  position: relative;
  padding: 16px 24px 16px 32px;
  margin-bottom: 12px;
  border-radius: ${themeGet('radii.4')};
  background-color: ${themeGet('colors.white')};
  box-shadow: ${themeGet('shadows.4')};

  &:last-child {
    margin-bottom: 0
  }
`

CardListItem.defaultProps = {
  variant: 'default',
}

const CardList: FC<CardListBaseProps> = ({
  children,
  modules,
  ...rest
}) => {
  const items = modules.data.map(module =>
    <CardListItem
      key={module._id}
      module={module}
      variant="default"
    />
  )

  return (
    <div {...rest}>
      {items}
    </div>
  )
}

export default CardList
