import { Grid } from '@mui/material'
import theme from '@Styles/theme'
import styled from 'styled-components'

export const HeaderGrid = styled(Grid)`
    background-color: ${theme.palette.background.light};
    padding: 0.5rem 2rem;
`

export const HeaderImage = styled.img`
    max-width: 80px;
`
