import React from 'react'
import { SCStep, SCConnector, SCStepLabel, SCStepper } from './style'
import { CustomStepperProps } from './types'

const CustomStepper: React.FC<CustomStepperProps> = (
    props: CustomStepperProps
) => {
    const { currentStep, totalSteps } = props

    return (
        <SCStepper
            activeStep={currentStep}
            alternativeLabel
            connector={<SCConnector />}
        >
            {totalSteps.map((step, index) => (
                <SCStep completed={currentStep > index} key={index}>
                    <SCStepLabel />
                </SCStep>
            ))}
        </SCStepper>
    )
}

export default CustomStepper
