import { FormControl } from '@mui/material'
import React from 'react'
import { SCCheckbox, SCFormControlLabel } from './style'
import { CustomCheckboxProps } from './types'

const CustomCheckbox: React.FC<CustomCheckboxProps> = (
    props: CustomCheckboxProps
) => {
    const { onChange, value, name, label } = props

    return (
        <FormControl>
            <SCFormControlLabel
                label={label}
                id={name}
                control={
                    <SCCheckbox
                        color="primary"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => onChange(event.target.checked)}
                        checked={value}
                    />
                }
            ></SCFormControlLabel>
        </FormControl>
    )
}

export default CustomCheckbox
