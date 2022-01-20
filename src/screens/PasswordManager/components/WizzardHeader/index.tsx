import React from 'react'
import { WizzardHeadWrapper } from './styles'

const WizzardHeader: React.FC = () => {
    return (
        <WizzardHeadWrapper
            padding="2rem 0rem"
            container
            justifyContent="center"
            alignContent="flex-start"
        >
            Stepper
        </WizzardHeadWrapper>
    )
}

export default WizzardHeader
