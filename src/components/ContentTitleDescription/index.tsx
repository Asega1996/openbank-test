import CustomTypography from '@Components/CustomTypography'
import { Grid } from '@mui/material'
import React from 'react'
import { ContentTitleDescriptionProps } from './types'

const ContentTitleDescription: React.FC<ContentTitleDescriptionProps> = (
    props: ContentTitleDescriptionProps
) => {
    const { title, description } = props

    return (
        <Grid marginBottom={4} display={'block'} item>
            <Grid marginBottom={1}>
                <CustomTypography
                    fontWeight={'bold'}
                    fontSize={'1.15rem'}
                    content={title}
                />
            </Grid>
            <CustomTypography content={description} />
        </Grid>
    )
}

export default ContentTitleDescription
