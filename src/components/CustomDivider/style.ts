import { Divider } from '@mui/material'
import styled from 'styled-components'
import { SCDividerProps } from './types'

export const SCDivider = styled(Divider)<SCDividerProps>`
    background-color: ${(props) => props.bgcolor};
    width: ${(props) => props.width};
    height: 2px;
`
