import { Grid } from '@mui/material'
import { getCurrentActiveStep } from '@Store/reducers/passwordManager'
import React from 'react'
import { useSelector } from 'react-redux'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { WizardContentWrapper } from './styles'

const WizzardContent: React.FC = () => {
    // Hooks
    const activeStep = useSelector(getCurrentActiveStep)

    return (
        <WizardContentWrapper>
            <Grid container display="block">
                {activeStep === 0 && <Step1 />}
                {activeStep === 1 && <Step2 />}
                {activeStep === 2 && <Step3 />}
            </Grid>
        </WizardContentWrapper>
    )
}

export default WizzardContent
