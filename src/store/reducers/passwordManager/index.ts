import { createReducer } from 'deox'
import { always, evolve } from 'ramda'
import { passwordManagerActions } from '@Store/actions/passwordManager'
import { RootState } from '..'

// Default State type definition
type DefaultState = {
    checkTerms: boolean
    activeStep: number
    password: string
    passwordRepeat: string
    optionalQuestion?: string
    fetching: boolean
    error: boolean
    success: boolean
}

// Default state object
const defaultState: DefaultState = {
    checkTerms: false,
    activeStep: 0,
    password: '',
    passwordRepeat: '',
    optionalQuestion: '',
    fetching: false,
    success: false,
    error: false,
}

// Reducer definition
export default createReducer(defaultState, (handleAction) => [
    handleAction(passwordManagerActions.setActiveStep, (state, { payload }) =>
        evolve(
            {
                activeStep: always(payload),
                success: always(false),
                error: always(false),
                fetching: always(false),
            },
            state
        )
    ),

    handleAction(passwordManagerActions.setStep1, (state, { payload }) =>
        evolve(
            {
                checkTerms: always(payload.checkTerms),
                success: always(false),
                error: always(false),
                fetching: always(false),
            },
            state
        )
    ),

    handleAction(passwordManagerActions.setStep2, (state, { payload }) =>
        evolve(
            {
                success: always(false),
                error: always(false),
                fetching: always(false),
                passwordRepeat: always(payload.passwordRepeat),
                password: always(payload.password),
                optionalQuestion: always(payload.optionalQuestion),
            },
            state
        )
    ),

    handleAction(passwordManagerActions.submitForm, (state) =>
        evolve(
            {
                success: always(false),
                error: always(false),
                fetching: always(true),
            },
            state
        )
    ),

    handleAction(passwordManagerActions.error, (state) =>
        evolve(
            {
                success: always(false),
                error: always(true),
                fetching: always(false),
            },
            state
        )
    ),

    handleAction(passwordManagerActions.success, (state) =>
        evolve(
            {
                success: always(true),
                error: always(false),
                fetching: always(false),
            },
            state
        )
    ),

    handleAction(passwordManagerActions.reset, (state) =>
        evolve(
            {
                chechTerms: always(defaultState.checkTerms),
                activeStep: always(defaultState.activeStep),
                password: always(defaultState.password),
                passwordRepeat: always(defaultState.passwordRepeat),
                optionalQuestion: always(defaultState.optionalQuestion),
                success: always(defaultState.success),
                error: always(defaultState.error),
                fetching: always(defaultState.fetching),
            },
            state
        )
    ),
])

// Selectors

export const getCurrentActiveStep = (state: RootState) =>
    state.passwordManager.activeStep
export const getPassword = (state: RootState) => state.passwordManager.password
export const getPasswordRepeat = (state: RootState) =>
    state.passwordManager.passwordRepeat
export const getOptionalQuestion = (state: RootState) =>
    state.passwordManager.optionalQuestion
export const getSuccessPasswordManager = (state: RootState) =>
    state.passwordManager.success
export const getCheckTerms = (state: RootState) =>
    state.passwordManager.checkTerms
