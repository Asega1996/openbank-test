import ContentWithImage from '@Components/ContentWithImage'
import { Grid } from '@mui/material'
import React from 'react'
import WizzardContentHeading from '../Heading'
import FormStep1 from './Form'
import Image1 from '@Assets/img/group.svg'
import Image2 from '@Assets/img/group-3.svg'
import { useTranslation } from 'react-i18next'
import ContentTitleDescription from '@Components/ContentTitleDescription'
import { Step1FormValues } from './Form/types'
import { passwordManagerActions } from '@Store/actions/passwordManager'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentActiveStep } from '@Store/reducers/passwordManager'

const Step1: React.FC = () => {
    // Hooks
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const activeStep: number = useSelector(getCurrentActiveStep)

    const updateFormState = (data: Step1FormValues) => {
        // Dispatch -> Save Form 1 values in the store
        dispatch(passwordManagerActions.setStep1(data))
        // Dispatch -> Pass to next form step
        dispatch(passwordManagerActions.setActiveStep(activeStep + 1))
    }

    return (
        <>
            {/* Content of Step 1 */}
            <Grid px={8} pt={2} marginTop={'0.5rem'}>
                {/* Heading */}
                <WizzardContentHeading />

                {/* Content cards w/image */}
                <Grid marginBottom={2} alignItems={'center'} container>
                    <ContentWithImage
                        image={Image1}
                        contentText={t('step1:content-card-1')}
                    />
                    <ContentWithImage
                        image={Image2}
                        contentText={t('step1:content-card-2')}
                    />
                </Grid>

                {/* Descriptors */}
                <Grid>
                    <ContentTitleDescription
                        title={t('step1:how-works')}
                        description={t('step1:how-works-description')}
                    />
                    <ContentTitleDescription
                        title={t('step1:what-save')}
                        description={t('step1:what-save-description')}
                    />
                </Grid>
            </Grid>

            {/*Step Form 1*/}
            <Grid>
                <FormStep1 onSubmit={updateFormState} />
            </Grid>
        </>
    )
}

export default Step1
