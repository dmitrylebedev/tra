import React, { FC } from 'react'
import Box from '../Box'
import Heading from '../Heading'
import { FilterList, FilterListItem } from './FilterList/FilterList'
import { assemblyStatusFilters, reviewStatusFilters } from '../../config'
import nanoid from 'nanoid'
import { RootState } from '../../store'
import { connect } from 'react-redux'
import { changeModulesFilter } from '../../store/modules/actions'
import { FilterProps } from './Filter.types'
import { AssemblyStatus, ReviewStatus } from '../../store/modules/types'

const Filter: FC<FilterProps> = ({
  filter,
  changeModulesFilter
}) => {
  return (
    <Box
      bg='gray.800'
      p={20}
      border='filter'
      borderRadius={4}
    >
      <Heading variant='h2' mb={14}>Filter</Heading>

      <Heading variant='h4' as='h4'>Assembly</Heading>

      <FilterList mb={20}>
        { assemblyStatusFilters.map((status) => {
          const id = nanoid()
          return (
            <FilterListItem
              key={id}
              onClick={() => {
                changeModulesFilter({
                  assemblyStatus: status.value as AssemblyStatus,
                  reviewStatus: filter.reviewStatus
                })
              }}
              active={status.value === filter.assemblyStatus}
            >
              {status.label}
            </FilterListItem>
          )
        }) }
      </FilterList>

      <Heading variant='h4' as='h4'>Review</Heading>

      <FilterList mb={20}>
        { reviewStatusFilters.map((status) => {
          const id = nanoid()
          return (
            <FilterListItem
              key={id}
              onClick={() => {
                changeModulesFilter({
                  assemblyStatus: filter.assemblyStatus,
                  reviewStatus: status.value as ReviewStatus
                })
              }}
              active={status.value === filter.reviewStatus}
            >
              {status.label}
            </FilterListItem>
          )
        }) }
      </FilterList>
    </Box>
  )
}

const mapStateToProps = (state: RootState) => ({
  filter: state.modules.filter
})

export default connect(
  mapStateToProps,
  {
    changeModulesFilter
  }
)(Filter)
