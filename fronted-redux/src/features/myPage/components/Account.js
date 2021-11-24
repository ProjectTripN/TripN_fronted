import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Container} from '@mui/material';
import Header from './Header';
import Profile from 'features/myPage/components/Profile'
import Navi from './Navi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UserMF  from './UserMF';


export default function AutoGrid() {
  const [value, setValue] = React.useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });
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
    onSubmit: () => {}
    },
    {
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {}
  })

  return (<>
    <Header/>
    <Container >
    <Box sx={{ bgcolor: '#ffff',width: 'auto', height: '10vh' }} />
    <Container >
      <Grid container spacing={2}>
        <Grid item sm='auto' >
          <Profile/>
          <Navi/>
        </Grid>
        <UserMF/>
      </Grid>
    </Container>
    </Container>
    </>
  );
}