import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import ContentTitleDescription from '.'
import Adapter from 'enzyme-adapter-react-16'

const TEST_TITLE = 'Título de ejemplo'
const TEST_DESCRIPTION = 'Descripción de ejemplo'

configure({
    adapter: new Adapter(),
})

let componentWrapper: ReactWrapper

describe('ContentTitleDescription component testing', () => {
    beforeEach(() => {
        componentWrapper = mount(
            <ContentTitleDescription
                title={TEST_TITLE}
                description={TEST_DESCRIPTION}
            />
        )
    })

    it('should render childs without any error', () => {
        expect(componentWrapper.find('CustomTypography').length).toEqual(2)
    })

    it('should check the childs text', () => {
        expect(componentWrapper.text()).toContain(TEST_TITLE)
        expect(componentWrapper.text()).toContain(TEST_DESCRIPTION)
    })
})
