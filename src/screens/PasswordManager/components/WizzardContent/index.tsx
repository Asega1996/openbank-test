import { Grid } from '@mui/material'
import React from 'react'
import { WizardContentWrapper } from './styles'

const WizzardContent = () => {
    return (
        <WizardContentWrapper>
            <Grid px={10} py={4} container>
                <div>Step que sea</div>
            </Grid>
        </WizardContentWrapper>
    )
}

export default WizzardContent
