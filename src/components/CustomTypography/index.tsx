import theme from '@Styles/theme'
import React from 'react'
import { SCTypography } from './styles'
import { CustomTypographyProps } from './types'

const CustomTypography: React.FC<CustomTypographyProps> = (
    props: CustomTypographyProps
) => {
    const {
        align,
        color,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight,
        letterSpacing,
        lineHeight,
        content,
        clickable,
    } = props

    return (
        <SCTypography
            {...props}
            align={align}
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontStyle={fontStyle}
            fontWeight={fontWeight}
            letterSpacing={letterSpacing}
            lineHeight={lineHeight}
            clickable={clickable}
        >
            {content}
        </SCTypography>
    )
}

CustomTypography.defaultProps = {
    align: 'left',
    color: theme.palette.secondary.dark,
    fontFamily: 'Quicksand',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: '0',
    lineHeight: '1.5rem',
    clickable: false,
}

export default CustomTypography
