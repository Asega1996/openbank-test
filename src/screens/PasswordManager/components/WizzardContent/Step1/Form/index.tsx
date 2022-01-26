import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Step1FormProps, Step1FormValues } from './types'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import WizzardFooter from '@Screens/PasswordManager/components/WizzardFooter'
import CustomCheckbox from '@Components/CustomCheckbox'
import { getCheckTerms } from '@Store/reducers/passwordManager'

const FormStep1: React.FC<Step1FormProps> = (props: Step1FormProps) => {
    // Destructuring props
    const { onSubmit } = props

    // Hooks
    const { t } = useTranslation()
    const checkTerms: boolean = useSelector(getCheckTerms)

    // Form default values
    const defaultValues: Step1FormValues = {
        checkTerms: checkTerms,
    }

    // Validation schema
    const schema = yup.object().shape({
        checkTerms: yup.boolean().required().oneOf([true]),
    })

    // useForm destructuring
    const { handleSubmit, control, formState } = useForm<Step1FormValues>({
        defaultValues,
        resolver: yupResolver(schema),
        mode: 'all',
        reValidateMode: 'onBlur',
    })

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Grid mb={3} px={8}>
                <Controller
                    name="checkTerms"
                    control={control}
                    render={({ field: { onChange, value, name } }) => (
                        <CustomCheckbox
                            label={t('step1:terms-label')}
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
