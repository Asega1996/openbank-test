import CustomTypography from '@Components/CustomTypography'
import theme from '@Styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StickyFooter } from './style'

const Footer = () => {
    // Hooks
    const { t } = useTranslation()

    return (
        <StickyFooter>
            <CustomTypography
                color={theme.palette.primary.main}
                align="center"
                content={t('common:test')}
            />
        </StickyFooter>
    )
}

export default Footer
