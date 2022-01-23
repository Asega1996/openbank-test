import CustomTypography from '@Components/CustomTypography'
import { Grid } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SCLoader } from './style'

const CustomLoader = () => {
    const { i18n } = useTranslation()

    return (
        <Grid py={8} alignItems="center" justifyContent="center" container>
            <Grid mb={2} textAlign="center" item xs={12}>
                <SCLoader color="inherit" />{' '}
            </Grid>
            <Grid item xs={12}>
                <CustomTypography
                    textAlign="center"
                    content={i18n.t('common:processing-request')}
                />
            </Grid>
        </Grid>
    )
}

export default CustomLoader
