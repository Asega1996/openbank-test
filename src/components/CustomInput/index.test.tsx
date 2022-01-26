import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CustomInput from '.'
import { FieldError } from 'react-hook-form'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { SCSecurityLevelBar } from './styles'

const onClickMock = jest.fn()
const TEST_ICON = <CheckCircleOutlineIcon />
const TEST_LABEL = 'Label'
const TEST_PLACEHOLDER = 'Placeholder'
const TEST_ERRORS = { message: 'ERROR' } as FieldError

configure({
    adapter: new Adapter(),
})

let componentWrapper: ReactWrapper

describe('ContentTitleDescription component testing', () => {
    beforeEach(() => {
        componentWrapper = mount(
            <CustomInput
                errors={TEST_ERRORS}
                label={TEST_LABEL}
                placeholder={TEST_PLACEHOLDER}
                icon={TEST_ICON}
                onClickIcon={onClickMock}
                hasSecurityLevel
                securityLevel={1}
            />
        )
    })

    it('should render without any error', () => {
        expect(componentWrapper).not.toBeNull()
    })

    it('should check the component text', () => {
        expect(componentWrapper.text()).toContain(TEST_LABEL)
    })

    it('should check click icon brehavoiur', () => {
        componentWrapper.find('button').simulate('click')
        expect(onClickMock).toHaveBeenCalled()
    })

    describe('component errors', () => {
        it('should render component error if exists', () => {
            expect(componentWrapper.text()).toContain('ERROR')
        })
    })

    describe('secturity levels', () => {
        it('should check the security levels bar exist if prop is defined', () => {
            expect(componentWrapper.find(SCSecurityLevelBar).length).toBe(1)
        })
    })
})
