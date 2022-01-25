import { Grid } from '@mui/material'
import { passwordManagerActions } from '@Store/actions/passwordManager'
import React from 'react'
import WizzardContentHeading from '../Heading'
import FormStep2 from './Form'
import { Step2FormValues } from './Form/types'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentActiveStep } from '@Store/reducers/passwordManager'

const Step2 = () => {
    const activeStep: number = useSelector(getCurrentActiveStep)
    const dispatch = useDispatch()

    const updateFormState = (data: Step2FormValues) => {
        // Dispatch -> Save Form 2 values in the store
        dispatch(passwordManagerActions.setStep2(data))
        // Dispatch -> Pass to next form step
        dispatch(passwordManagerActions.setActiveStep(activeStep + 1))
        // Dispatch -> trigger the saga calling the service
        dispatch(passwordManagerActions.submitForm())
    }

    return (
        <>
            {/* Content of Step 2 */}
            <Grid px={8} pt={2} marginTop={'0.5rem'}>
                <WizzardContentHeading />
            </Grid>
            <Grid>
                <FormStep2 onSubmit={updateFormState} />
            </Grid>
        </>
    )
}

export default Step2
