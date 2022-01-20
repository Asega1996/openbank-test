import { Grid } from '@mui/material'
import React from 'react'
import WizzardContent from './components/WizzardContent'
import WizzardFooter from './components/WizzardFooter'
import WizzardHeader from './components/WizzardHeader'
import { PaswordManagerWrapper } from './styles'

const PasswordManager = () => {
    return (
        <Grid item xs={12}>
            <PaswordManagerWrapper disableGutters maxWidth="md">
                <WizzardHeader />
                <WizzardContent />
                <WizzardFooter />
            </PaswordManagerWrapper>
        </Grid>
    )
}

export default PasswordManager
