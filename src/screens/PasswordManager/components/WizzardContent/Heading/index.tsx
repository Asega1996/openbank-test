import CustomDivider from '@Components/CustomDivider'
import CustomTypography from '@Components/CustomTypography'
import theme from '@Styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'

const WizzardContentHeading = () => {
    const { t } = useTranslation()
    return (
        <>
            <CustomTypography
                fontSize="1.4rem"
                fontWeight="bold"
                lineHeight="1.5rem"
                color={theme.palette.secondary.dark}
                content={t('common:password-manager-title')}
            />
            <CustomDivider />
        </>
    )
}

export default WizzardContentHeading
