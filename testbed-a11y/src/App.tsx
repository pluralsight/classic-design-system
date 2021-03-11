import Theme, { names as themes } from '@pluralsight/ps-design-system-theme'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Chrome } from './components/Chrome'

import { NotFoundPage } from './pages/NotFoundPage'
import { SearchPage } from './pages/SearchPage'
import { UsersPage } from './pages/UsersPage'

function App() {
  const [theme] = useState(themes.dark)

  return (
    <Theme name={theme}>
      <Router>
        <Chrome>
          <Switch>
            <Route path="/users">
              <UsersPage />
            </Route>

            <Route path="/search">
              <SearchPage />
            </Route>

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Chrome>
      </Router>
    </Theme>
  )
}

export default App
