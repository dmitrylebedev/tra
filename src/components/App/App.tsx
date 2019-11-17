import React, { FC, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import useReactRouter from 'use-react-router'
import { theme } from '../../config'
import { AppProps } from './App.types'
import { getModules, init, changeNextModulesPage } from '../../store/modules/actions'
import { RootState } from '../../store'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header'
import Filter from '../Filter'
import CardList from '../CardList'
import Contain from '../Contain'
import Row from '../Row'
import Top from '../Top'
import Column from '../Column'
import Loader from '../Loader'
import Text from '../Text'

const App: FC<AppProps> = (props) => {
  const { history, location } = useReactRouter()

  const {
    getModules,
    modules,
    changeNextModulesPage,
    init
  } = props

  // FIXME: update-eslint-rule
  useEffect(() => {
    const unsubscribe = history.listen(() => getModules())
    return () => {
      unsubscribe()
    };
  }, [history]) // eslint-disable-line

  // FIXME: update-eslint-rule
  useEffect(() => {
    init(location.search)
  }, []) // eslint-disable-line

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header/>
        <Contain>
          <Row>
            <Column
              width={240}
            >
              <Filter/>
            </Column>
            <Column
              flex='1 1 auto'
              pl={40}
            >
              <Top total={modules.total}/>

              { modules.hasError && (
                <Text>Load Modules Failed <span role="img" aria-label="error">📢</span> </Text>
              ) }
              { modules.data.length ? (
                <InfiniteScroll
                  dataLength={modules.data.length}
                  next={changeNextModulesPage}
                  hasMore={modules.hasMore}
                  loader={<Loader/>}
                  scrollThreshold="250px"
                  style={{ overflow: 'initial' }}
                >
                  <CardList modules={ modules }/>
                </InfiniteScroll> ) : modules.loading ? <Loader/> : null
              }
            </Column>
          </Row>
        </Contain>
      </>
    </ThemeProvider>
  )
}

const mapStateToProps = (state: RootState) => ({
  modules: state.modules
})

export default connect(
  mapStateToProps,
  {
    getModules,
    changeNextModulesPage,
    init
  }
)(App)
