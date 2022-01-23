import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import theme from '@Styles/theme'
import styled from 'styled-components'
import { Grid, svgIconClasses } from '@mui/material'

export const SCIconError = styled(WarningAmberIcon)`
    &.${svgIconClasses.root} {
        width: 50%;
        height: auto;
        max-width: 75px;
        color: ${theme.palette.defaults.error};
    }
`

export const SCIconSuccess = styled(CheckCircleOutlineIcon)`
    &.${svgIconClasses.root} {
        width: 50%;
        height: auto;
        max-width: 75px;
        color: ${theme.palette.defaults.success};
    }
`

export const ActionsWrapper = styled(Grid)`
    border-top: solid 2px ${theme.palette.background.default};
    background-color: ${theme.palette.defaults.white};
`

export const SCArrowNext = styled(ArrowForwardIosIcon)`
    &.${svgIconClasses.root} {
        color: ${theme.palette.primary.main};
    }
`
