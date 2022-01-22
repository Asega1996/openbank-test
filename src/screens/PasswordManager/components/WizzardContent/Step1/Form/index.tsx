import {
    getCheckTerms,
    getCurrentActiveStep,
} from '@Store/reducers/passwordManager'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Step1FormValues } from './types'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { passwordManagerActions } from '@Store/actions/passwordManager'
import { Controller, useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import WizzardFooter from '@Screens/PasswordManager/components/WizzardFooter'
import { getType } from 'deox'
import CustomCheckbox from '@Components/CustomCheckbox'

const FormStep1 = () => {
    // Hooks
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    const checkTerms: boolean = useSelector(getCheckTerms)
    const activeStep: number = useSelector(getCurrentActiveStep)

    // Form default values
    const defaultValues: Step1FormValues = {
        checkTerms: checkTerms,
    }

    // Validation schema
    const schema = yup.object().shape({
        checkTerms: yup.boolean().required().oneOf([true]),
    })

    // on submit form behaviour
    const onSubmit = (data: Step1FormValues) => {
        dispatch({
            type: getType(passwordManagerActions.setStep1),
            payload: data,
        })
        dispatch({
            type: getType(passwordManagerActions.setActiveStep),
            payload: activeStep + 1,
        })
    }

    const { handleSubmit, control, formState } = useForm<Step1FormValues>({
        defaultValues,
        mode: 'all',
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema),
    })

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Grid mb={3} px={8}>
                <Controller
                    name="checkTerms"
                    control={control}
                    render={({ field: { onChange, value, name } }) => (
                        <CustomCheckbox
                            label={i18n.t('step1:terms-label')}
                            onChange={onChange}
                            value={value}
                            name={name}
                        />
                    )}
                />
            </Grid>

            <Grid>
                <WizzardFooter disabled={!formState.isValid} />
            </Grid>
        </form>
    )
}

export default FormStep1