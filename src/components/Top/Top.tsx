import React, { FC } from 'react'
import { TopProps } from './Top.types'
import Row from '../Row'
import Column from '../Column'
import Heading from '../Heading'
import Badge from '../Badge'
import Search from "../Search";
import Sorting from '../Sorting'

const Top: FC<TopProps> = ({ total }) => {
  return (
    <Row mb={28} alignItems="center">
      <Column display='flex' alignItems='center' flex='1 1 auto'>
        <Heading variant='h1' mr={8}>
          Assembly Processes
        </Heading>
        <Badge>{total}</Badge>
      </Column>
      <Column display='flex' alignItems='center'>
        <Sorting mr={12}/>
        <Search text='Search by assembly name'/>
      </Column>
    </Row>
  )
}

export default Top
