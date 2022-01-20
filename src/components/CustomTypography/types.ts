import React from "react"

type TextAlignmentType = 'center' | 'inherit' | 'justify' | 'left' | 'right'

export type CustomTypographyProps = {
    color?: string
    align?: TextAlignmentType
    classes?: string
    fontFamily?: string
    fontStyle?: string
    fontSize?: string
    fontWeight?: string
    letterSpacing?: string
    lineHeight?: string
    content?: string | React.FC
}

export type SCTypographyProps = {
    color?: string
    align?: TextAlignmentType
    classes?: string
    fontfamily?: string
    fontstyle?: string
    fontsize?: string
    fontweight?: string
    letterspacing?: string
    lineheight?: string
    content?: string | React.FC
}

