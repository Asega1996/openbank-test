import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { i18n } = useTranslation()
    return <>{i18n.t('common:dummy')}</>
}

export default Header
