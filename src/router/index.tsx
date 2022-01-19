import InfoScreen from '@Screens/Info'
import React from 'react'

import { Route, Switch } from 'react-router-dom'
import EntrypointRoute from './components/EntryPointRoute'
import UnmatchedRoute from './components/UnmatchedRoute'

const AppRoutes = () => {
    return (
        <Switch>
            <EntrypointRoute exact path="/" />

            {/* Public Routes */}
            <Route
                exact
                path="/form"
                render={() => (
                    <>
                        <p>Formulario</p>
                    </>
                )}
            />

            <Route exact path="/info" render={() => <InfoScreen />} />

            {/* Unmatched Routes -> Show 404 screen */}
            <UnmatchedRoute />
        </Switch>
    )
}

export default AppRoutes
