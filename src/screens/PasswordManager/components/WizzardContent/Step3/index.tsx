import CustomLoader from '@Components/CustomLoader'
import StatusFeedback from '@Components/StatusFeedback'
import { passwordManagerActions } from '@Store/actions/passwordManager'
import {
    getFetching,
    getSuccessPasswordManager,
} from '@Store/reducers/passwordManager'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Step3 = () => {
    const dispatch = useDispatch()

    const success = useSelector(getSuccessPasswordManager)
    const fetching = useSelector(getFetching)

    const onClickActions = () => {
        dispatch(passwordManagerActions.reset())
    }

    return (
        <>
            {/* Show loader if request didnt finished -> show component feedback when request is finished */}
            {fetching ? (
                <CustomLoader />
            ) : (
                <>
                    <StatusFeedback
                        onClickAction={onClickActions}
                        success={success}
                    />
                </>
            )}
        </>
    )
}

export default Step3
