import StatusFeedback from '@Components/StatusFeedback'
import { getSuccessPasswordManager } from '@Store/reducers/passwordManager'
import React from 'react'
import { useSelector } from 'react-redux'

const Step3 = () => {
    const success = useSelector(getSuccessPasswordManager)
    console.log(success)

    return (
        <>
            <StatusFeedback success={success} />
        </>
    )
}

export default Step3
