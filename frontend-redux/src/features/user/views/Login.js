import { Link as RouterLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import * as Yup from "yup";
import React, { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { login } from "features/user/reducer/userSlice";
import {
  Container,
  Typography,
  Divider,
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { EmailApi } from "..";
import { TripLayout } from "features/common";
import { useForm } from "react-hook-form";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: 0,
}));

export default function Login() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const {
    handleSubmit,
    // formstate: { touched, getFieldProps, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // const { errors, touched, getFieldProps, isSubmitting } = formstate;

  const [showPassword, setShowPassword] = useState(false);

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     remember: true,
  //   },
  //   validationSchema: LoginSchema,
  //   onSubmit: (values) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     alert(JSON.stringify(values));

  //     await dispatch(login(values));
  //     alert(JSON.stringify(values.name) + "님 환영합니다.");
  //     navigate("/home");
  //   },
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   alert(JSON.stringify(signup));

  //   await dispatch(join(signup));
  //   alert(JSON.stringify(signup.name) + "님 회원가입을 환영합니다.");
  //   navigate("/home");
  // };

  // const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
  //   formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <TripLayout>
        <Container>
          <ContentStyle>
            <Stack sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                Login
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Enter your details below.
              </Typography>
            </Stack>
            <EmailApi />
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                OR{" "}
              </Typography>
            </Divider>

            <form
              method="POST"
              onSubmit={handleSubmit(async (data) => {
                await dispatch(login(data));
              })}
            >
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  type="text"
                  id="username"
                  // {...getFieldProps("email")}
                  // error={Boolean(touched.email && errors.email)}
                  // helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  id="password"
                  // {...getFieldProps("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  // error={Boolean(touched.password && errors.password)}
                  // helperText={touched.password && errors.password}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 2 }}
              >
                {/* <FormControlLabel
                  control={
                    <Checkbox
                      {...getFieldProps("remember")}
                      checked={values.remember}
                    />
                  }
                  label="Remember me"
                /> */}
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
                // loading={isSubmitting}
              >
                Login
              </LoadingButton>
            </form>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="/join">
                Get started
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </TripLayout>
    </>
  );
}
