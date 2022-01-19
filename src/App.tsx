import React, { Suspense } from 'react'
import './App.scss'

import Layout from '@Screens/Layout'
import i18n from '@Services/i18n'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <I18nextProvider i18n={i18n}>
                <Router>
                    <Layout />
                </Router>
            </I18nextProvider>
        </Suspense>
    )
}

export default App
