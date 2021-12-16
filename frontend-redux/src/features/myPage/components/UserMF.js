import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Container,
  Stack,
  Link,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import * as Yup from "yup";
import { Icon } from "@iconify/react";
import { LoadingButton } from "@mui/lab";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "40vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function UserMF() {
  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik(
    {
      initialValues: {
        password: "",
      },
      validationSchema: RegisterSchema,
      onSubmit: () => {},
    },
    {
      initialValues: {
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit: () => {},
    }
  );
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
  return (
    <>
      <Box sx={{ width: "100vh", height: "40vh" }}>
        {/* bgcolor: "#ffff" */}
        <Grid item sm="auto">
          <ContentStyle>
            <Box sx={{ mb: 10 }} />
            <Typography variant="h4">회원정보 수정</Typography>
            <Box sx={{ mb: 2 }} />
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    label="비밀번호 확인"
                    {...getFieldProps("password")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
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
                ></Stack>
                <LoadingButton
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  href="/UserModify"
                >
                  확인
                </LoadingButton>
              </Form>
            </FormikProvider>
          </ContentStyle>
        </Grid>
      </Box>
    </>
  );
}
