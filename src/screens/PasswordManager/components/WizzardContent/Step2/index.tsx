import { Grid } from '@mui/material'
import React from 'react'
import WizzardContentHeading from '../Heading'

const Step2 = () => {
    return (
        <>
            {/* Content of Step 2 */}
            <Grid px={8} pt={2} marginTop={'0.5rem'}>
                <WizzardContentHeading />

                <div>Step 2</div>
            </Grid>
        </>
    )
}

export default Step2
