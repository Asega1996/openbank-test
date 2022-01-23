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
import { SCInputLabel, SCSecurityLevelBar } from './styles'
import { CustomInputProps } from './types'

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => {
    const {
        label,
        errors,
        icon,
        onClickIcon,
        hasSecurityLevel,
        securityLevel,
        ...restProps
    } = props
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
                    {hasSecurityLevel && (
                        <SCSecurityLevelBar level={securityLevel!} />
                    )}

                    {errors && (
                        <CustomTypography
                            color={theme.palette.defaults.error}
                            content={i18n.t(errors.message!)}
                        />
                    )}
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default CustomInput
