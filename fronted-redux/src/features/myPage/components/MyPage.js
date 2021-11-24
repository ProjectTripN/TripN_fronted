import React from 'react';
import { Box, Grid, Container, Divider } from '@mui/material';
import styles from '../MyPage.css';
import Header from './Header';
import Profile from 'features/myPage/components/Profile'
import Navi from './Navi';
import ComTrip from './ComTrip';


export default function MyPage() {

  return (<>
    <Header/>
    <Box sx={{ bgcolor: '#5C6579', width: 'auto', height:'auto'}} > 
    <Container >
    <Box sx={{ bgcolor: '#ffff', height: '10vh', width: 'auto' }} />
      <Grid container spacing={2}>
        <Grid  >
          <Profile/>
          <Divider />
          <Navi/>
          </Grid>
          <ComTrip/>
          </Grid>
    </Container>
    </Box>
    </>
  );
}