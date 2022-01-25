import CustomTypography from '@Components/CustomTypography'
import { Grid } from '@mui/material'
import theme from '@Styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    ActionsWrapper,
    SCArrowNext,
    SCIconError,
    SCIconSuccess,
} from './style'
import { CustomFeedbackProps } from './types'

const StatusFeedback: React.FC<CustomFeedbackProps> = (
    props: CustomFeedbackProps
) => {
    const { success, onClickAction } = props
    const { t } = useTranslation()

    return (
        <>
            <Grid my={4} alignItems="center" justifyContent="center" container>
                <Grid textAlign="center" item xs={1}>
                    {success ? <SCIconSuccess /> : <SCIconError />}
                </Grid>
                <Grid mt={3} item container xs={6}>
                    <Grid mb={2} item xs={12}>
                        <CustomTypography
                            fontWeight="bold"
                            fontSize="1.5rem"
                            content={
                                success
                                    ? t('step3:success-title')
                                    : t('step3:error-title')
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTypography
                            content={
                                success
                                    ? t('step3:success-subtitle')
                                    : t('step3:error-subtitle')
                            }
                        />
                    </Grid>
                </Grid>
            </Grid>

            <ActionsWrapper container display={'flex'}>
                <Grid
                    px={8}
                    py={4}
                    item
                    xs={12}
                    justifyContent="flex-end"
                    display="flex"
                    alignItems="center"
                >
                    <CustomTypography
                        id="action-text"
                        clickable={'pointer'}
                        onClick={onClickAction}
                        fontWeight="bold"
                        color={theme.palette.primary.main}
                        content={
                            success
                                ? t('step3:success-actions')
                                : t('step3:error-actions')
                        }
                    />
                    <SCArrowNext fontSize="small" />
                </Grid>
            </ActionsWrapper>
        </>
    )
}

export default StatusFeedback
