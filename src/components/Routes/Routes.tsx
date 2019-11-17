import React, { FC, Suspense } from 'react'
import { Route, Switch } from 'react-router'
import Loader from '../Loader'
import Text from '../Text'

const App = React.lazy(() => import('../App'))

const Routes: FC = () => (
  <Suspense fallback={<Loader/>}>
    <Switch>
      <Route
        path={'/'}
        component={App}
        exact
      />

      <Route
        path={'*'}
      >
        <Text>Not Found</Text>
      </Route>
    </Switch>
  </Suspense>
)

export default Routes
