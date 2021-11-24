import React from 'react';
import { Box, Grid, Divider, Typography
 } from '@mui/material';



export default function ComTrip(props) { 

  return (<>
    <Box sx={{ bgcolor: '#d9d2e9', width: '100vh', height:'auto' }} >
    <Grid >
      <Typography
      color="textPrimary"
      gutterBottom
      variant="h4"
      align=""
      >
      다가오는 여행
      </Typography>
      <Divider sx={{ my: 3 }} />
      <Typography
      color="textPrimary"
      gutterBottom
      variant="body1"
      >
      여행까지 남은 날짜 d-day 확정된 여행이 없을때는 광고
      </Typography>
    </Grid>
    </Box>
    </>
  );
}