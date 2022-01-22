import React, { Suspense } from 'react'
import './App.scss'

import Layout from '@Screens/Layout'
import i18n from '@Services/i18n'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

const App: React.FC = () => {
    const { store } = configureStore()

    return (
        <Suspense fallback={null}>
            <I18nextProvider i18n={i18n}>
                <Provider store={store}>
                    <Router>
                        <Layout />
                    </Router>
                </Provider>
            </I18nextProvider>
        </Suspense>
    )
}

export default App
