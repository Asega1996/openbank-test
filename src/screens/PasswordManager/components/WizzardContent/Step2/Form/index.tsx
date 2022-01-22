import { yupResolver } from '@hookform/resolvers/yup'
import { passwordManagerActions } from '@Store/actions/passwordManager'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Step2FormValues } from './types'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getCurrentActiveStep } from '@Store/reducers/passwordManager'
import { Grid } from '@mui/material'
import CustomTypography from '@Components/CustomTypography'
import WizzardFooter from '@Screens/PasswordManager/components/WizzardFooter'
import CustomInput from '@Components/CustomInput'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import {
    HAS_A_DIGIT_CHARACTER,
    HAS_A_LOWERCASE_CHARACTER,
    HAS_A_UPPERCASE_CHARACTER,
    OPTIONAL_QUESTION_MAX_LENGTH,
    PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
} from './validations'

const FormStep2 = () => {
    // Hooks
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    const activeStep: number = useSelector(getCurrentActiveStep)
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false)

    // Form default values
    const defaultValues: Step2FormValues = {
        password: '',
        passwordRepeat: '',
        optionalQuestion: '',
    }

    // Validation schema
    const schema = yup.object().shape({
        password: yup
            .string()
            .required('step2:required-field')
            .min(PASSWORD_MIN_LENGTH, 'step2:password-field-error-length-min')
            .max(PASSWORD_MAX_LENGTH, 'step2:password-field-error-length-max')
            .matches(
                HAS_A_DIGIT_CHARACTER,
                'step2:password-field-error-no-number'
            )
            .matches(
                HAS_A_UPPERCASE_CHARACTER,
                'step2:password-field-error-no-uppercase'
            )
            .matches(
                HAS_A_LOWERCASE_CHARACTER,
                'step2:password-field-error-no-lowercase'
            ),
        passwordRepeat: yup
            .string()
            .required('step2:required-field')
            .oneOf(
                [yup.ref('password'), null],
                'step2:repeat-password-passwords-match'
            ),
        optionalQuestion: yup
            .string()
            .max(
                OPTIONAL_QUESTION_MAX_LENGTH,
                'step2:optionalQuestion-error-length-max'
            ),
    })

    // on submit form behaviour
    const onSubmit = (data: Step2FormValues) => {
        // Dispatch -> Save Form 2 values in the store
        dispatch(passwordManagerActions.setStep2(data))
        // Dispatch -> Pass to next form step
        dispatch(passwordManagerActions.setActiveStep(activeStep + 1))
        // Dispatch -> trigger the saga calling the service
        dispatch(passwordManagerActions.submitForm())
    }

    // Hook form
    const { handleSubmit, control, formState } = useForm<Step2FormValues>({
        defaultValues,
        resolver: yupResolver(schema),
        mode: 'all',
        reValidateMode: 'onBlur',
    })

    // Toogle form passwords visibility
    const passwordToogleVisibility = () => {
        setShowPassword(!showPassword)
    }

    const passwordRepeatToogleVisibility = () => {
        setShowPasswordRepeat(!showPasswordRepeat)
    }

    // On form cancel navigate to previous step
    const onCancel = () => {
        dispatch(passwordManagerActions.setActiveStep(activeStep - 1))
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Grid px={8} spacing={4} container mb={3}>
                <Grid item xs={12}>
                    <CustomTypography
                        content={i18n.t('step2:create-password')}
                    />
                    <CustomTypography
                        content={i18n.t('step2:you-cant-recover-pwd')}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={5}>
                    <Controller
                        control={control}
                        name="password"
                        render={({
                            field: { onChange, onBlur, value, name },
                            fieldState: { error },
                        }) => (
                            <CustomInput
                                label={i18n.t('step2:label-password')}
                                placeholder={i18n.t(
                                    'step2:password-field-placeholder'
                                )}
                                type={showPassword ? 'text' : 'password'}
                                icon={
                                    showPassword ? (
                                        <VisibilityOffOutlinedIcon />
                                    ) : (
                                        <VisibilityOutlinedIcon />
                                    )
                                }
                                onClickIcon={passwordToogleVisibility}
                                name={name}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                errors={error ?? null}
                                fullWidth
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={5}>
                    <Controller
                        control={control}
                        name="passwordRepeat"
                        render={({
                            field: { onChange, onBlur, value, name },
                            fieldState: { error },
                        }) => (
                            <CustomInput
                                label={i18n.t('step2:label-passwordRepeat')}
                                placeholder={i18n.t(
                                    'step2:passwordRepeat-field-placeholder'
                                )}
                                type={showPasswordRepeat ? 'text' : 'password'}
                                icon={
                                    showPasswordRepeat ? (
                                        <VisibilityOffOutlinedIcon />
                                    ) : (
                                        <VisibilityOutlinedIcon />
                                    )
                                }
                                onClickIcon={passwordRepeatToogleVisibility}
                                name={name}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                errors={error ?? null}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
            </Grid>

            <Grid mb={8} px={8} container>
                <Grid mb={2} item xs={12}>
                    <CustomTypography
                        content={i18n.t('step2:create-optional-question')}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="optionalQuestion"
                        render={({
                            field: { onChange, onBlur, value, name },
                            fieldState: { error },
                        }) => (
                            <CustomInput
                                label={i18n.t('step2:label-optionalQuestion')}
                                placeholder={i18n.t(
                                    'step2:optionalQuestion-field-placeholder'
                                )}
                                name={name}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                errors={error ?? null}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
            </Grid>

            <WizzardFooter onCancel={onCancel} disabled={!formState.isValid} />
        </form>
    )
}

export default FormStep2
