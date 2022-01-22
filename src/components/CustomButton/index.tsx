import { Grid } from '@mui/material'
import React from 'react'
import { SCButton } from './style'
import { CustomButtonProps } from './types'

const CustomButton: React.FC<CustomButtonProps> = (
    props: CustomButtonProps
) => {
    const { iconleft, iconright, text } = props

    return (
        <SCButton {...props}>
            {iconleft ?? null}
            <Grid px={1}>{text}</Grid>
            {iconright ?? null}
        </SCButton>
    )
}

CustomButton.defaultProps = {
    iconleft: undefined,
    iconright: undefined,
}

export default CustomButton
