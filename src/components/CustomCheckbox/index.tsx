import { FormControl } from '@mui/material'
import React from 'react'
import { SCCheckbox, SCFormControlLabel } from './style'
import { CustomCheckboxProps } from './types'

const CustomCheckbox: React.FC<CustomCheckboxProps> = (
    props: CustomCheckboxProps
) => {
    const { onChange, value, name, label, ...restProps } = props

    return (
        <FormControl id={`${name}-checkbox`}>
            <SCFormControlLabel
                label={label}
                id={name}
                control={
                    <SCCheckbox
                        name={name}
                        color="primary"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => onChange(event.target.checked)}
                        checked={value}
                        {...restProps}
                    />
                }
            ></SCFormControlLabel>
        </FormControl>
    )
}

export default CustomCheckbox
