import { combineReducers } from 'redux'
import PasswordManagerReducer from './passwordManager'

export const rootReducer = combineReducers({
    passwordManager: PasswordManagerReducer,
})

export type RootState = ReturnType<typeof rootReducer>
