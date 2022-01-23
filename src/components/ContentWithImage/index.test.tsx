import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ContentWithImage from '.'

const TEST_IMAGE = 'src/assets/img/key_openbank.png'
const TEST_TEXT = 'Descripción de ejemplo'

configure({
    adapter: new Adapter(),
})

let componentWrapper: ReactWrapper

describe('ContentTitleDescription component testing', () => {
    beforeEach(() => {
        componentWrapper = mount(
            <ContentWithImage image={TEST_IMAGE} contentText={TEST_TEXT} />
        )
    })

    it('should render childs without any error', () => {
        expect(componentWrapper.find('CustomTypography').length).toEqual(1)
        expect(componentWrapper.find('img').length).toEqual(1)
    })

    it('should check the childs text', () => {
        expect(componentWrapper.text()).toContain(TEST_TEXT)
    })
})
