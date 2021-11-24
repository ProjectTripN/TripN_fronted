import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container,  Stack, Link, Typography,
  TextField,IconButton, InputAdornment } from '@mui/material';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';

  
const ContentStyle = styled('div')(({ theme }) => ({
maxWidth: 480,
margin: 'auto',
display: 'flex',
minHeight: '100vh',
flexDirection: 'column',
justifyContent: 'center',
}));


export default function UserMF() {
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
  });
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
  const handleShowPassword = () => {
      setShowPassword((show) => !show);
  };
  const handleChange = (event, newValue) => {
      setValue(newValue);
      setSelectedValue(event.target.value);
  };
  const [selectedValue, setSelectedValue] = React.useState('a');
    return (
    <>
      <Box sx={{ bgcolor: '#ffff',width: '100vh', height: '100vh' }} >
        <Grid item sm='auto' >
          <Container>
            <ContentStyle>
              <Grid>    
                <Box sx={{ mb: 5 }}/>
                <Typography variant="h4" >
                회원정보 수정
                </Typography>
              </Grid>
              <Box sx={{ mb: 2 }}>
              </Box>
              <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    autoComplete="username"
                    type="email"
                    label="아이디 (이메일 입력)"
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    label="비밀번호 확인"
                    {...getFieldProps('password')}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                            <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                        </IconButton>
                        </InputAdornment>
                    )
                    }}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  </Stack>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                  </Stack>
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                  ><Link to="/UserModify" component={RouterLink}>  
                    회원정보 수정  </Link></LoadingButton>
              </Form>
              </FormikProvider>
            </ContentStyle>
          </Container>
        </Grid>
      </Box>
      </>
    )
}