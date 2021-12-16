import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography } from '@mui/material';
import JoinTab from '../components/JoinTab';
import { Join_button, Mbti_button } from '..';
import { TripLayout } from 'features/common';

const ContentStyle = styled('div')(({ theme }) => ({
maxWidth: 480,
margin: 'auto',
display: 'flex',
minHeight: '100vh',
flexDirection: 'column',
justifyContent: 'center',
}));

export default function JoinDetail () {

return (<>
    <TripLayout>
    <Container>
        <ContentStyle>
            <Typography variant="h4" gutterBottom margin='30px'>
                Get started make your trip.
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
                Make your trip, Simply and Faster!
            </Typography>
            <JoinTab/>
        </ContentStyle>
        <Mbti_button/>
    </Container>
    </TripLayout>
    </>)
}