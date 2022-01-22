import React from 'react'
import { CustomFeedbackProps } from './types'

const StatusFeedback: React.FC<CustomFeedbackProps> = (
    props: CustomFeedbackProps
) => {
    const { success } = props
    return <>{success ? 'Bieeen' : 'Maaaaal'}</>
}

export default StatusFeedback
