import { Grid } from '@mui/material'
import React from 'react'
import WizzardContentHeading from '../Heading'
import FormStep2 from './Form'

const Step2 = () => {
    return (
        <>
            {/* Content of Step 2 */}
            <Grid px={8} pt={2} marginTop={'0.5rem'}>
                <WizzardContentHeading />
            </Grid>
            <Grid>
                <FormStep2 />
            </Grid>
        </>
    )
}

export default Step2
