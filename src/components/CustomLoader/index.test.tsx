import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CustomLoader from '.'
import CustomTypography from '@Components/CustomTypography'
import { SCLoader } from './style'

const LOADING_I18N_KEY = 'common:processing-request'

configure({
    adapter: new Adapter(),
})

let componentWrapper: ReactWrapper

describe('ContentTitleDescription component testing', () => {
    beforeEach(() => {
        componentWrapper = mount(<CustomLoader />)
    })

    it('should render childs without any error', () => {
        expect(componentWrapper.find(CustomTypography).length).toEqual(1)
        expect(componentWrapper.find(SCLoader).length).toEqual(1)
    })

    it('should render i18n key of loading', () => {
        expect(componentWrapper.text()).toEqual(LOADING_I18N_KEY)
    })
})
