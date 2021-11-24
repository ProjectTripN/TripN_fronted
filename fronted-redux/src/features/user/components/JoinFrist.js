import React from 'react';
import styled from 'styled-components';
import { Box, Link, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import { Stack,Button,Divider, Grid} from '@mui/material';
import googleFill from '@iconify/icons-eva/google-fill';
import ReactTooltip from 'react-tooltip';

const ContentStyle = styled('div')(({ theme }) => ({
maxWidth: 480,
margin: 'auto',
display: 'flex',
minHeight: '100vh',
flexDirection: 'column',
justifyContent: 'center'
}));

export default function JoinFrist () {
    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name required'),
        lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    
return (<>
    <Container>
        <ContentStyle>
        <Box sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom>
            Get started make your trip.
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
            Make your trip, Simply and Faster!
        </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
            <Button fullWidth size="large" color="inherit" variant="outlined">
            <Icon icon="simple-icons:naver" color="#1ec800" height={24} />                
            </Button>
            <Button fullWidth size="large" color="inherit" variant="outlined"
                data-tip="구현하지 않는 기능입니다">
            <Icon icon={googleFill} color="#DF3E30" height={24} />
            </Button>
            <ReactTooltip place="bottom" type="dark" effect="float"/>
        </Stack>
        <Grid container
              spacing={3}><Grid
              item
              xs={12}
              md={6}
            > </Grid></Grid>
        <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            OR
            </Typography>
        </Divider>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <Link to="/joinDetail" component={RouterLink}>
            이메일로 회원가입하기
            </Link>
            </Typography>
        </ContentStyle>
    </Container>
    </>    
)
}