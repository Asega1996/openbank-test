import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { i18n } = useTranslation()
    return <>{i18n.t('common:dummy')}</>
}

export default Footer
