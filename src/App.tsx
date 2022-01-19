import React from 'react'

import './App.scss'
import Layout from '@Screens/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
    return (
        <Router>
            <Layout />
        </Router>
    )
}

export default App
