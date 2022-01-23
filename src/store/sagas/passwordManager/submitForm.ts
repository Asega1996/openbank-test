import { submitForm } from '@Services/api'
import { passwordManagerActions } from '@Store/actions/passwordManager'
import {
    getOptionalQuestion,
    getPassword,
    getPasswordRepeat,
} from '@Store/reducers/passwordManager'
import { call, put, select } from 'redux-saga/effects'

export function* submitFormSaga() {
    try {
        // Get request params
        const password: string = yield select(getPassword)
        const repeat: string = yield select(getPasswordRepeat)
        const optionalQuestion: string = yield select(getOptionalQuestion)

        // Make api all
        const response: unknown = yield call(
            submitForm,
            password,
            repeat,
            optionalQuestion
        )

        // Evaluate resonse
        if (response) {
            yield put(passwordManagerActions.success())
        } else {
            yield put(passwordManagerActions.error())
        }
    } catch (err) {
        yield put(passwordManagerActions.error())
    }
}
