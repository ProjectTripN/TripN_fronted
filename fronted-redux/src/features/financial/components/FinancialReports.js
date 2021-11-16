import React from 'react'
import styled from 'styled-components'
import { AppAppBar, Navigation } from 'features/adminCommon'
import { Box, Container, Grid } from '@material-ui/core';

const FinancialReports = () => {
    return (<>
        <AppAppBar />
            <div className='container' >
                <Navigation className='navi' />
                <Container maxWidth={false} className='item1' >
                    <Grid>
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xl={3}
                            xs={12}
                        >
                        </Grid>
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xl={3}
                            xs={12}
                        >
                        </Grid>
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xl={3}
                            xs={12}
                        >
                        </Grid>
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xl={3}
                            xs={12}
                        >
                        </Grid>
                    </Grid>
                </Container>
            </div>
    </>)
}

export default FinancialReports