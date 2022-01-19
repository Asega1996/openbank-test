import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const EntrypointRoute = ({ ...props }) => {
    return <Route {...props} render={() => <Redirect to="/form" />} />
}

export default EntrypointRoute
