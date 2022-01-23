import React from 'react'
import successImg from './success.png'
import error from './error.png'

const Step3: React.FC = (props: any) => {
    const { success } = props
    return <img src={success ? successImg : error} />
}

export default Step3
