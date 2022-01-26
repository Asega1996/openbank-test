import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CustomTypography from '.'

const TEST_ALIGNMENT = 'center'
const TEST_COLOR = 'red'
const TEST_FONT_FAMILY = 'Quicksand'
const TEST_FONTSIZE = '3rem'
const TEST_FONT_STYLE = 'normal'
const TEST_FONT_WEIGHT = 'bold'
const TEST_LETTER_SPACING = '3px'
const TEST_LINE_HEIGHT = '1.5rem'
const TEST_TEXT = 'Test Text'

configure({
    adapter: new Adapter(),
})

let componentWrapper: ReactWrapper

describe('ContentTitleDescription component testing', () => {
    beforeEach(() => {
        componentWrapper = mount(
            <CustomTypography
                textAlign={TEST_ALIGNMENT}
                color={TEST_COLOR}
                fontSize={TEST_FONTSIZE}
                fontStyle={TEST_FONT_STYLE}
                fontWeight={TEST_FONT_WEIGHT}
                letterSpacing={TEST_LETTER_SPACING}
                lineHeight={TEST_LINE_HEIGHT}
                content={TEST_TEXT}
                fontFamily={TEST_FONT_FAMILY}
            />
        )
    })

    it('should render without any error', () => {
        expect(componentWrapper).not.toBeNull()
    })

    it('should check the component text', () => {
        expect(componentWrapper.text()).toContain(TEST_TEXT)
    })

    it('should check component props', () => {
        const {
            content,
            color,
            fontWeight,
            fontFamily,
            fontSize,
            fontStyle,
            letterSpacing,
            lineHeight,
            textAlign,
        } = componentWrapper.find(CustomTypography).props()

        expect(content).toEqual(TEST_TEXT)
        expect(color).toEqual(TEST_COLOR)
        expect(fontWeight).toEqual(TEST_FONT_WEIGHT)
        expect(fontFamily).toEqual(TEST_FONT_FAMILY)
        expect(fontSize).toEqual(TEST_FONTSIZE)
        expect(fontStyle).toEqual(TEST_FONT_STYLE)
        expect(letterSpacing).toEqual(TEST_LETTER_SPACING)
        expect(lineHeight).toEqual(TEST_LINE_HEIGHT)
        expect(textAlign).toEqual(TEST_ALIGNMENT)
    })
})
