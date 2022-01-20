import React from 'react'
import { Grid } from '@mui/material'
import SpainFlag from '@Assets/flags/spain.svg'
import UkFlag from '@Assets/flags/uk.svg'
import { CustomFlag } from './styles'
import { useTranslation } from 'react-i18next'
import { checkIfLanguagesAreTheSame } from '@Utils/checkIfLanguagesAreTheSame'
import { LanguageEntry } from './types'

// Array of available lang for iterate it
const availableLanguages: Array<LanguageEntry> = [
    { code: 'es', icon: SpainFlag, alt: 'spain' },
    { code: 'en', icon: UkFlag, alt: 'uk' },
]

const LanguageSelector = () => {
    // Hooks
    const { i18n } = useTranslation()

    // Functions
    const changeI18nLanguage = (language: string) => {
        language !== i18n.language ? i18n.changeLanguage(language) : null
    }

    return (
        <Grid item>
            <Grid container direction="row" alignItems="center" spacing={2}>
                {/* Array of langs iteration */}
                {availableLanguages.map((language, index) => (
                    <Grid key={index} item>
                        <CustomFlag
                            onClick={() => changeI18nLanguage(language.code)}
                            selected={checkIfLanguagesAreTheSame(
                                i18n.language,
                                language.code
                            )}
                            src={language.icon}
                            alt={language.alt}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default LanguageSelector
