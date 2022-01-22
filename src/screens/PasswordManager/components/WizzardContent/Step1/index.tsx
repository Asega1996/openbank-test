import ContentWithImage from '@Components/ContentWithImage'
import { Grid } from '@mui/material'
import React from 'react'
import WizzardContentHeading from '../Heading'
import FormStep1 from './Form'
import Image1 from '@Assets/img/group.svg'
import Image2 from '@Assets/img/group-3.svg'
import { useTranslation } from 'react-i18next'
import ContentTitleDescription from '@Components/ContentTitleDescription'

const Step1: React.FC = () => {
    const { i18n } = useTranslation()

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
                        contentText={i18n.t('step1:content-card-1')}
                    />
                    <ContentWithImage
                        image={Image2}
                        contentText={i18n.t('step1:content-card-2')}
                    />
                </Grid>

                {/* Descriptors */}
                <Grid>
                    <ContentTitleDescription
                        title={i18n.t('step1:how-works')}
                        description={i18n.t('step1:how-works-description')}
                    />
                    <ContentTitleDescription
                        title={i18n.t('step1:what-save')}
                        description={i18n.t('step1:what-save-description')}
                    />
                </Grid>
            </Grid>

            {/*Step Form 1*/}
            <Grid>
                <FormStep1 />
            </Grid>
        </>
    )
}

export default Step1
