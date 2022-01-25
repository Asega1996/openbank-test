import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FormStep2 from '.'
import configureStore from '@Store/index'
import { Provider } from 'react-redux'
import CustomButton from '@Components/CustomButton'
import CustomInput from '@Components/CustomInput'
import { act } from 'react-dom/test-utils'

const { store } = configureStore()

configure({
    adapter: new Adapter(),
})

let submitFn = jest.fn()
let componentWrapper: ReactWrapper

describe('FormStep2 component testing', () => {
    beforeEach(() => {
        submitFn = jest.fn()
        componentWrapper = mount(
            <Provider store={store}>
                <FormStep2 onSubmit={submitFn} />
            </Provider>
        )
    })

    it('should render childs fields without any error', () => {
        expect(componentWrapper.find(CustomInput).length).toEqual(3)
        expect(componentWrapper.find(CustomButton).length).toEqual(1)
    })

    it('should check that the submit btn of the form is disabled initially and the checkbox value is false', () => {
        componentWrapper
            .find(CustomInput)
            .forEach((elem) => expect(elem.props().value).toBe(''))
        expect(
            componentWrapper.find(CustomButton).get(0).props.disabled
        ).toBeTruthy()
    })

    describe('FormStep2 component behavour', () => {
        it('should check a valid form', async () => {
            const fakeEvent = {
                preventDefault: () => null,
            }
            await act(async () => {
                await componentWrapper
                    .find(`input[name="password"]`)
                    .simulate('change', { target: { value: 'PasswordOK123' } })
                    .simulate('blur')
                await componentWrapper
                    .find(`input[name="passwordRepeat"]`)
                    .simulate('change', { target: { value: 'PasswordOK123' } })
                    .simulate('blur')
                await componentWrapper
                    .find(`form`)
                    .simulate('submit', fakeEvent)
                    .simulate('blur')
            })

            expect(submitFn).toHaveBeenCalled()
        })

        it('should check an invalid form', async () => {
            const fakeEvent = {
                preventDefault: () => null,
            }
            await act(async () => {
                await componentWrapper
                    .find(`input[name="password"]`)
                    .simulate('change', { target: { value: 'Password' } })
                    .simulate('blur')
                await componentWrapper
                    .find(`input[name="passwordRepeat"]`)
                    .simulate('change', { target: { value: 'PasswordOK123' } })
                    .simulate('blur')
                await componentWrapper
                    .find(`form`)
                    .simulate('submit', fakeEvent)
                    .simulate('blur')
            })

            expect(submitFn).not.toHaveBeenCalled()
        })
    })
})
