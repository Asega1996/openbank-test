import { Step1FormValues } from '@Screens/PasswordManager/components/WizzardContent/Step1/Form/types'
import { Step2FormValues } from '@Screens/PasswordManager/components/WizzardContent/Step2/Form/types'
import {
    SET_ACTIVE_STEP,
    SAVE_STEP_1,
    SAVE_STEP_2,
    SUBMIT_FORM_ERROR,
    SUBMIT_FORM_DONE,
    SUBMIT_FORM,
    RESET_FORM,
} from '@Store/constants/passwordManager'
import { createAction } from 'deox'

export const passwordManagerActions = {
    setActiveStep: createAction(
        SET_ACTIVE_STEP,
        (resolve) => (step: number) => resolve(step)
    ),
    setStep1: createAction(
        SAVE_STEP_1,
        (resolve) => (form: Step1FormValues) => resolve(form)
    ),
    setStep2: createAction(
        SAVE_STEP_2,
        (resolve) => (form: Step2FormValues) => resolve(form)
    ),
    submitForm: createAction(SUBMIT_FORM),
    error: createAction(SUBMIT_FORM_ERROR),
    success: createAction(SUBMIT_FORM_DONE),
    reset: createAction(RESET_FORM),
}
