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
        const passwordRepeat: string = yield select(getPasswordRepeat)
        const hint: string = yield select(getOptionalQuestion)

        // Make api all
        const response: unknown = yield call(
            submitForm,
            password,
            passwordRepeat,
            hint
        )

        // Evaluate resonse
            if(response) console.log("ok")

    } catch (err) {
        yield put(passwordManagerActions.error)
    }
}
