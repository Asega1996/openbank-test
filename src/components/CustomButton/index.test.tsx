import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CustomButton from '.'

const onClickMock = jest.fn()
const TEST_TEXT = 'Button'

configure({
    adapter: new Adapter(),
})

let componentWrapper: ReactWrapper

describe('ContentTitleDescription component testing', () => {
    beforeEach(() => {
        componentWrapper = mount(
            <CustomButton onClick={onClickMock} text={TEST_TEXT} />
        )
    })

    it('should render without any error', () => {
        expect(componentWrapper).not.toBeNull()
    })

    it('should check the component text', () => {
        expect(componentWrapper.text()).toContain(TEST_TEXT)
    })

    it('should check click brehavoiur', () => {
        componentWrapper.find('button').simulate('click')
        expect(onClickMock).toHaveBeenCalled()
    })
})
