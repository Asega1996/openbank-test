import { Typography } from '@mui/material'
import styled from 'styled-components'
import { SCTypographyProps } from './types'

export const SCTypography = styled(Typography)<SCTypographyProps>`
    color: ${(props) => props.color};
    font-family: ${(props) => props.fontfamily};
    font-size: ${(props) => props.fontsize};
    font-style: ${(props) => props.fontstyle};
    font-weight: ${(props) => props.fontweight};
    letter-spacing: ${(props) => props.letterspacing};
    line-height: ${(props) => props.lineheight};
    text-align: ${(props) => props.align};
    cursor: ${(props) => props.clickable};
`
