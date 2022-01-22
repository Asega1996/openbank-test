import { Avatar } from '@mui/material'
import theme from '@Styles/theme'
import styled from 'styled-components'
import { CustomFlagType } from './types'

export const SCFlag = styled(Avatar)<CustomFlagType>`
    border: ${(props) =>
        props.selected ? `solid 2px ${theme.palette.primary.main}` : 'inherit'};
`
