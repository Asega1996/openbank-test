import { Grid } from '@mui/material'
import theme from '@Styles/theme'
import styled from 'styled-components'

export const StickyFooter = styled(Grid)`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${theme.palette.background.default};
    border-top: solid 1px ${theme.palette.background.light};
    padding: 0.75rem 0rem 0.75rem;
    color: white;
    text-align: center;
`
