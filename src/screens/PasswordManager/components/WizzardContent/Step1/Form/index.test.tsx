import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FormStep1 from '.'
import configureStore from '@Store/index'
import { Provider } from 'react-redux'
import CustomCheckbox from '@Components/CustomCheckbox'
import CustomButton from '@Components/CustomButton'
import { act } from 'react-dom/test-utils'

const { store } = configureStore()

configure({
    adapter: new Adapter(),
})

let submitFn = jest.fn()
let componentWrapper: ReactWrapper
const fakeEvent = {
    preventDefault: () => null,
}

describe('FormStep1 component testing', () => {
    beforeEach(() => {
        submitFn = jest.fn()
        componentWrapper = mount(
            <Provider store={store}>
                <FormStep1 onSubmit={submitFn} />
            </Provider>
        )
    })

    it('should render child field without any error', () => {
        expect(componentWrapper.find(CustomCheckbox).length).toEqual(1)
        expect(componentWrapper.find(CustomButton).length).toEqual(1)
    })

    it('should check that the submit btn of the form is disabled initially and the checkbox value is false', () => {
        expect(
            componentWrapper.find(CustomCheckbox).get(0).props.value
        ).toBeFalsy()
        expect(
            componentWrapper.find(CustomButton).get(0).props.disabled
        ).toBeTruthy()
    })

    describe('FormStep1 component behavour', () => {
        it('should check a valid form', async () => {
            await act(async () => {
                await componentWrapper
                    .find(`input[name="checkTerms"]`)
                    .simulate('change', { target: { checked: true } })
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
                    .find(`form`)
                    .simulate('submit', fakeEvent)
                    .simulate('blur')
            })

            expect(submitFn).not.toHaveBeenCalled()
        })
    })
})
