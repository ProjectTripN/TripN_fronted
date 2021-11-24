import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import ReactTooltip from 'react-tooltip';
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import {
  Container, Typography, Button, Divider, Link, Grid, Stack, Checkbox,
  TextField,IconButton, InputAdornment, FormControlLabel} from '@mui/material';
import { LoadingButton } from '@mui/lab';


const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 0
}));


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {}
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (<>
      <Container >
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Enter your details below.</Typography>
          </Stack>
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
          <Grid></Grid>
          <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR </Typography>
          </Divider>
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  autoComplete="username"
                  type="email"
                  label="Email address"
                  {...getFieldProps('email')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  {...getFieldProps('password')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
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
                <FormControlLabel
                  control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
                  label="Remember me"
                  />
                <Link component={RouterLink} variant="subtitle2" to="/forgotPassword">
                  Forgot password?
                </Link>
              </Stack>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              > Login </LoadingButton>
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