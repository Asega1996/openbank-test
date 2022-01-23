import { takeLatest } from 'redux-saga/effects'
import { getType } from 'deox'
import { passwordManagerActions } from '@Store/actions/passwordManager'
import { submitFormSaga } from './submitForm'

export const passwordManagerSagas = [
    takeLatest(getType(passwordManagerActions.submitForm), submitFormSaga),
]
