import CustomStepper from '@Components/CustomStepper'
import React from 'react'
import { WizzardHeadWrapper } from './styles'
import { useSelector } from 'react-redux'
import { getCurrentActiveStep } from '@Store/reducers/passwordManager'

const steps = [1, 2, 3]

const WizzardHeader: React.FC = () => {
    const activeStep: number = useSelector(getCurrentActiveStep)

    return (
        <WizzardHeadWrapper
            padding="2rem 0rem"
            container
            justifyContent="center"
            alignContent="flex-start"
        >
            <CustomStepper totalSteps={steps} currentStep={activeStep} />
        </WizzardHeadWrapper>
    )
}

export default WizzardHeader
