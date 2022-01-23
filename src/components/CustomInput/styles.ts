import {
    Divider,
    dividerClasses,
    InputLabel,
    inputLabelClasses,
} from '@mui/material'
import theme from '@Styles/theme'
import {
    transformSecurityLevelColor,
    transformSecurityLevelToWidth,
} from '@Utils/tranformSecurityLevels'
import styled from 'styled-components'
import { SecurityLevelBarProps } from './types'

export const SCInputLabel = styled(InputLabel)`
    &.${inputLabelClasses.root} {
        color: ${theme.palette.secondary.dark};
        font-family: ${theme.typography.fontFamily};
        font-weight: 700;
        padding-bottom: 0.5rem;
    }
`

export const SCSecurityLevelBar = styled(Divider)<
    SecurityLevelBarProps & { level: number }
>`
    width: ${(props) => transformSecurityLevelToWidth(props.level!)};

    &.${dividerClasses.root} {
        border-color: ${(props) => transformSecurityLevelColor(props.level!)};
        border-width: 2px;
        display: ${(props) => (props.level ? 'block' : 'none')};
    }
`
