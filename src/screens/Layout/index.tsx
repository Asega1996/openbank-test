import AppRoutes from '@Router'
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
        </>
    )
}

export default Layout
