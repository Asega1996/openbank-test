import { Checkbox } from '@material-ui/core'
import {
    checkboxClasses,
    FormControlLabel,
    formControlLabelClasses,
} from '@mui/material'
import theme from '@Styles/theme'
import styled from 'styled-components'

export const SCFormControlLabel = styled(FormControlLabel)`
    &.${formControlLabelClasses.root} {
        .${formControlLabelClasses.label} {
            font-family: ${theme.typography.fontFamily};
        }
    }
`

export const SCCheckbox = styled(Checkbox)`
    &.${checkboxClasses.root} {
        &.${checkboxClasses.colorPrimary} {
            &.${checkboxClasses.checked} {
                color: ${theme.palette.secondary.dark};
            }
        }
    }
`
