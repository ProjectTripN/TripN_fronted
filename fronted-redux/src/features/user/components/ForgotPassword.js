import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Stack, Link, Container, Typography, TextField, Grid, Button } from '@mui/material';
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { LoadingButton } from '@mui/lab';
import Tooltip from 'react-tooltip';


const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 0
}));

export default function ForgotPassword() {

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    number: Yup.number().required('PhoneNumber is required')
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      number: '',
      text: '',
      remember: true
    },
    validationSchema: LoginSchema,
   
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  
  return (<>
    <Container >
    <ContentStyle>
      <Stack sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom>
        Forgot your Password?
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
        Enter your credentials to continue.</Typography>
      </Stack>
      <Grid></Grid>
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
              autoComplete="username"
              type="number"
              label="휴대폰 번호 (숫자만 입력)"
              placeholder="-를 제외하고 입력해주세요."
              {...getFieldProps('number')}
              error={Boolean(touched.number && errors.number)}
              helperText={touched.number && errors.number}
            /> 
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="username"
              type="text"
              label="인증번호"
              {...getFieldProps('text')}
              error={Boolean(touched.text && errors.text)}
              helperText={touched.text && errors.text}
            /> 
            <Stack direction="row" spacing={2}>
            <Grid container justifyContent="center">
            <Grid item>
            <Tooltip title="Add" placement="bottom">
            </Tooltip>
            </Grid>
            </Grid>
            <Button fullWidth size="medium" color="inherit" variant="outlined"
                data-tip="구현하지 않는 기능입니다"> 확인
            </Button>
            </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          > 비밀번호 찾기 </LoadingButton>
        </Form>
      </FormikProvider>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don’t have an account?&nbsp;
        <Link variant="subtitle2" component={RouterLink} to="join">
          Get started
        </Link>
      </Typography>
    </ContentStyle>
    </Container>
    </>
  );
}