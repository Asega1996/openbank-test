import CustomTypography from '@Components/CustomTypography'
import theme from '@Styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StickyFooter } from './style'

const Footer = () => {
    const { i18n } = useTranslation()
    return (
        <StickyFooter>
            <CustomTypography
                color={theme.palette.primary.main}
                align="center"
                content={i18n.t('common:test')}
            />
        </StickyFooter>
    )
}

export default Footer
