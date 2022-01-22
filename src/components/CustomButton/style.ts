import { Button, buttonBaseClasses } from '@mui/material'
import theme from '@Styles/theme'
import styled from 'styled-components'

export const SCButton = styled(Button)`
    &.${buttonBaseClasses.root} {
        background-color: ${theme.palette.secondary.dark};
        color: ${theme.palette.defaults.white};
        font-family: ${theme.typography.fontFamily};
        text-transform: none;
        font-weight: bold;
        border-radius: 1px;
        align-items: center;
        padding: 8px 10px;

        &:hover {
            background-color: ${theme.palette.secondary.dark};
            color: ${theme.palette.defaults.white};
            opacity: 0.8;
        }

        .MuiButton-label {
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
        }

        &.${buttonBaseClasses.disabled} {
            background-color: ${theme.palette.secondary.dark};
            color: ${theme.palette.defaults.white};
            opacity: 0.5;
        }
    }
`
