import React from 'react'
import PasswordManager from '@Screens/PasswordManager'
import { Route, Switch } from 'react-router-dom'
import EntrypointRoute from './components/EntryPointRoute'
import UnmatchedRoute from './components/UnmatchedRoute'

const AppRoutes = () => {
    return (
        <Switch>
            {/*Entry point route what redirect users from / to /form */}
            <EntrypointRoute exact path="/" />

            {/* Public Routes */}
            <Route exact path="/form" render={() => <PasswordManager />} />

            {/* Unmatched Routes -> Show 404 screen */}
            <UnmatchedRoute />
        </Switch>
    )
}

export default AppRoutes
