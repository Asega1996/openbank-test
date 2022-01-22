import CustomTypography from '@Components/CustomTypography'
import {
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    OutlinedInput,
} from '@mui/material'
import theme from '@Styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SCInputLabel } from './styles'

const CustomInput = (props: any) => {
    const { label, errors, icon, onClickIcon, ...restProps } = props
    const { i18n } = useTranslation()

    return (
        <Grid container>
            <Grid item xs={12}>
                <SCInputLabel>{label}</SCInputLabel>
            </Grid>
            <Grid item xs={12}>
                <FormControl
                    variant="outlined"
                    required
                    error={errors !== undefined}
                    fullWidth={props.fullWidth}
                >
                    <OutlinedInput
                        {...restProps}
                        error={!!errors}
                        endAdornment={
                            icon ? (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={onClickIcon}
                                        edge="end"
                                    >
                                        {icon}
                                    </IconButton>
                                </InputAdornment>
                            ) : null
                        }
                    />

                    {errors && (
                        <CustomTypography
                            color={theme.palette.defaults.error}
                            content={i18n.t(errors.message)}
                        />
                    )}
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default CustomInput
