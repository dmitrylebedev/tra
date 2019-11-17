import React, { FC } from 'react'
import styled from 'styled-components'
import { SpecBaseProps } from './Spec.types'
import Text from '../Text'
import Flex from '../Flex'
import { TextProps } from '../Text/Text.types'
import { format, parseISO, themeGet } from '../../helpers'
import { getReviewStatusNames } from '../../config'

const SpecText: FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Text
      fontSize="14px"
      lineHeight="24px"
      {...rest}
    >
      {children}
    </Text>
  )
}

const SpecBase: FC<SpecBaseProps> = ({
  reviewStatus,
  updated,
  ...rest
}) => {
  const reviewStatusName = getReviewStatusNames(reviewStatus)

  const specs = [
    { title: 'Review', text: reviewStatusName },
    { title: 'Last Updates', text: format(parseISO(updated), 'dd/MM/yyyy HH:mm') }
  ]

  const specView = specs.map(({ title, text }, index) => (
    <dl key={index}>
      <dt>
        <SpecText color="gray.50">
          {title}
        </SpecText>
      </dt>
      <dd>
        <SpecText>
          {text}
        </SpecText>
      </dd>
    </dl>
  ))

  return (
    <Flex flexWrap="wrap" {...rest}>
      { specView }
    </Flex>
  )
}

const Spec = styled(SpecBase)`
  width: 290px;
  background-color: ${themeGet('colors.white')};

  dl {
    position:relative;
    display: flex;
    justify-content: space-between;
    margin: 0;
    width: 100%;

    &:before {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      bottom: 5px;
      height: 1px;
      background-color: ${themeGet('colors.gray.400')}
    }
  }

  dt,
  dd {
    position: relative;
    z-index: 1;
    margin: 0;
    background-color: ${themeGet('colors.white')}
  }

  dd {
    padding-left: 8px;
  }

  dt {
    padding-right: 8px;
  }
`

export default Spec
