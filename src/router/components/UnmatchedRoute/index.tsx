import React from 'react'
import { Route } from 'react-router-dom'

const UnmatchedRoute = () => {
    return (
        <Route path="*">
            <div>404 no hay nada para la ruta</div>
        </Route>
    )
}

export default UnmatchedRoute
