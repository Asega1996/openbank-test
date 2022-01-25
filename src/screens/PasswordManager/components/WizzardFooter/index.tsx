import { Grid } from '@mui/material'
import React from 'react'
import { WizardFootWrapper } from './styles'
import CustomTypography from '@Components/CustomTypography'
import theme from '@Styles/theme'
import { WizzardFooterProps } from './types'
import CustomButton from '@Components/CustomButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useTranslation } from 'react-i18next'

const WizzardFooter: React.FC<WizzardFooterProps> = (
    props: WizzardFooterProps
) => {
    const { disabled, onCancel } = props
    const { t } = useTranslation()

    return (
        <WizardFootWrapper container display={'flex'}>
            {/*Footer Container */}
            <Grid alignItems="center" container px={8} py={4}>
                {/* Render "Cancel" text if exists some fn associated */}
                <Grid item xs={6} sm={1}>
                    {onCancel && (
                        <CustomTypography
                            clickable={'pointer'}
                            fontWeight={'bold'}
                            onClick={onCancel}
                            color={theme.palette.secondary.dark}
                            content={t('common:cancel')}
                        />
                    )}
                </Grid>

                {/* Render submit forms btn */}
                <Grid justifyContent="flex-end" item container xs={6} sm={11}>
                    <CustomButton
                        type="submit"
                        iconright={<ArrowForwardIosIcon fontSize="small" />}
                        disabled={disabled}
                        text={t('common:next')}
                    />
                </Grid>
            </Grid>
        </WizardFootWrapper>
    )
}

export default WizzardFooter
