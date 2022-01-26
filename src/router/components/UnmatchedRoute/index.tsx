import CustomTypography from '@Components/CustomTypography'
import { Container, Grid } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Route } from 'react-router-dom'

const UnmatchedRoute = () => {
    // Hooks
    const { t } = useTranslation()

    return (
        <Route path="*">
            <Container maxWidth="lg">
                <Grid justifyContent="center" mt={8} container>
                    <Grid item>
                        <CustomTypography
                            fontWeight="bold"
                            textAlign={'center'}
                            content={t('common:unmatched-route')}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Route>
    )
}

export default UnmatchedRoute
