import React from 'react'
import { Grid } from '@mui/material'
import CustomImage from '@Components/CustomImage'
import CustomTypography from '@Components/CustomTypography'
import { ContentWithImageProps } from './types'

const ContentWithImage: React.FC<ContentWithImageProps> = (
    props: ContentWithImageProps
) => {
    const { image, contentText } = props

    return (
        <Grid
            display="block"
            container
            item
            paddingY={4}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
        >
            <Grid>
                <CustomImage src={image} />
            </Grid>
            <Grid>
                <CustomTypography align="center" content={contentText} />
            </Grid>
        </Grid>
    )
}

export default ContentWithImage
