import React, { FC } from 'react'
import styled from 'styled-components'
import useConstant from 'use-constant'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import { SearchBaseProps } from './Search.types'
import Icon from '../Icon'
import { connect } from 'react-redux'
import { searchModules } from '../../store/modules/actions'
import { RootState } from '../../store'
import { themeGet } from '../../helpers'

const SearchBase: FC<SearchBaseProps> = ({
  children,
  text,
  searchModules,
  search,
  ...rest
}) => {
  const debouncedSearchModules = useConstant(() =>
    AwesomeDebouncePromise(searchModules, 500)
  )

  return (
    <label {...rest}>
      <Icon icon="search"/>
      <input
        type="text"
        placeholder={search || text}
        onChange={(e) => debouncedSearchModules(e.target.value)}
      />
    </label>
  )
}

const Search = styled(SearchBase)`
  position:relative;
  display: block;
  
  input {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 286px;
    min-height: 34px;
    outline: none;
    border-radius: ${themeGet('radii.29')};
    background: ${themeGet('colors.white')};
    padding: 2px 24px 2px 34px;
    border: ${themeGet('borders.input')};
    font-size: 14px;
    line-height: 20px;
    
    &::placeholder {
      font-size: 15px;
      line-height: 20px;
      color: ${themeGet('colors.gray.200')};
    }
    
    &:focus {
      border: ${themeGet('borders.inputFocus')};
    }
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
    z-index: 1;
  }
`

const mapStateToProps = (state: RootState) => ({
  search: state.modules.search
})


export default connect(
  mapStateToProps,
  {
    searchModules
  }
)(Search)
