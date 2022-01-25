import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import StatusFeedback from '.'

const SUCCESS_TITLE_I18N_KEY = 'step3:success-title'
const SUCCESS_SUBTITLE_I18N_KEY = 'step3:success-subtitle'
const SUCCESS_ACTIONS_I18N_KEY = 'step3:success-actions'

const ERROR_TITLE_I18N_KEY = 'step3:error-title'
const ERROR_SUBTITLE_I18N_KEY = 'step3:error-subtitle'
const ERROR_ACTIONS_I18N_KEY = 'step3:error-actions'

configure({
    adapter: new Adapter(),
})

let componentWrapperSuccess: ReactWrapper
let componentWrapperFailure: ReactWrapper
let onClickActionMock = jest.fn()

describe('ContentTitleDescription component testing', () => {
    beforeEach(() => {
        onClickActionMock = jest.fn()
        componentWrapperSuccess = mount(
            <StatusFeedback onClickAction={onClickActionMock} success={true} />
        )
        componentWrapperFailure = mount(
            <StatusFeedback onClickAction={onClickActionMock} success={false} />
        )
    })

    describe('success feedback scenario', () => {
        it('check the text shown', () => {
            expect(componentWrapperSuccess.text()).toContain(
                SUCCESS_TITLE_I18N_KEY
            )
            expect(componentWrapperSuccess.text()).toContain(
                SUCCESS_SUBTITLE_I18N_KEY
            )
            expect(componentWrapperSuccess.text()).toContain(
                SUCCESS_ACTIONS_I18N_KEY
            )
        })
    })

    describe('error feedback scenario', () => {
        it('check the text shown', () => {
            expect(componentWrapperFailure.text()).toContain(
                ERROR_TITLE_I18N_KEY
            )
            expect(componentWrapperFailure.text()).toContain(
                ERROR_SUBTITLE_I18N_KEY
            )
            expect(componentWrapperFailure.text()).toContain(
                ERROR_ACTIONS_I18N_KEY
            )
        })
    })
})
