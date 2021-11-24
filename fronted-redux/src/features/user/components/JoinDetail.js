import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography
 } from '@mui/material';

import * as Yup from 'yup';
import { useState } from 'react';

import { useFormik, Form, FormikProvider } from 'formik';

import JoinTab from './JoinTab';



  
const ContentStyle = styled('div')(({ theme }) => ({
maxWidth: 480,
margin: 'auto',
display: 'flex',
minHeight: '100vh',
flexDirection: 'column',
justifyContent: 'center',
// padding: theme.spacing(12, 0)
}));

  
export default function JoinDetail () {
    const [showPassword, setShowPassword] = useState(false);

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name required'),
        lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        Passport:''
        },
        validationSchema: RegisterSchema,
        onSubmit: () => {
            // history.push('/home');
        }
    });
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setphoneNumber(event.target.value);
        setSelectedValue(event.target.value);
    };

    
    const [phoneNumber, setphoneNumber] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };
    
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
        <JoinTab/>
            
        </ContentStyle>
    </Container>
    </>    
)
}