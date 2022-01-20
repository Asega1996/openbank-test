import { Grid } from '@mui/material'
import React from 'react'
import OpenbankLogo from '@Assets/img/key_openbank.png'
import { HeaderGrid, HeaderImage } from './style'
import LanguageSelector from '@Components/LangaugeSelector'

const Header = () => {
    return (
        <HeaderGrid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item>
                <HeaderImage src={OpenbankLogo} alt={'openbank-logo'} />
            </Grid>
            <LanguageSelector />
        </HeaderGrid>
    )
}

export default Header
