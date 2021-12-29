import React, { useEffect } from "react";
import * as Yup from "yup";
import { AdminLayout } from "features/common";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import {
  Container,
  Typography,
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  lastSixMonth,
  yearchart,
  profitSixmonth
} from "features/adminCommon/reducer/adminSlice";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: 0,
}));

export default function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "admin",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      alert(JSON.stringify(values.name) + "님 환영합니다.");
      navigate("/an/dash-board");
    },
  });

  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  useEffect(() => {
    dispatch(lastSixMonth());
    dispatch(yearchart()); // financial reports
    dispatch(profitSixmonth()); // SM - six month reports

    console.log("보낸다");
  }, []);

  return (
    <>
      <AdminLayout>
        <Container>
          <ContentStyle>
            <Stack sx={{ mb: 2 }}>
              <Typography variant="h4" gutterBottom>
                Admin Login
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Enter your details below.
              </Typography>
            </Stack>

            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    autoComplete="userName"
                    type="email"
                    label="Email address"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    {...getFieldProps("password")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} edge="end">
                            <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 2 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...getFieldProps("remember")}
                        checked={values.remember}
                      />
                    }
                    label="Remember me"
                  />
                  <Link
                    component={RouterLink}
                    variant="subtitle2"
                    to="/forgotPassword"
                  >
                    Forgot password?
                  </Link>
                </Stack>
                <LoadingButton
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  Login
                </LoadingButton>
              </Form>
            </FormikProvider>
            <Typography variant="body2" align="center" sx={{ mt: 5 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="/join">
                Get started
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </AdminLayout>
    </>
  );
}
