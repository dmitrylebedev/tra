import React, { FC } from 'react'
import { sortingOrder } from '../../config'
import { SortingProps } from './Sorting.types'
import Flex from '../Flex'
import Switch from '../Switch'
import Text from '../Text'
import { connect } from 'react-redux'
import { RootState } from '../../store'
import { changeModulesSorting } from '../../store/modules/actions'

const Sorting: FC<SortingProps> = (props) => {
  const {
    sorting,
    changeModulesSorting,
    ...rest
  } = props

  return (
    <Flex alignItems="center" { ...rest }>
      <Text variant="gray14" mr={14}>Show</Text>
      <Switch
        checked={sorting.order === sortingOrder.defaultValue[0]}
        onChange={changeModulesSorting.bind(null,{ type: sorting.type, order: sorting.order })}
      >
        <Text>Latest first</Text>
        <Text>Old first</Text>
      </Switch>
    </Flex>
  )
}

const mapStateToProps = (state: RootState) => ({
  sorting: state.modules.sorting
})

export default connect(
  mapStateToProps,
  {
    changeModulesSorting
  }
)(Sorting)
