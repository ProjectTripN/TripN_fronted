import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Stack,
  Link,
  Typography,
  TextField,
  IconButton,
  InputLabel,
  NativeSelect,
  InputAdornment,
  FormControl,
  Divider,
  Radio,
  Button,
} from "@mui/material";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function UserModifyCom() {
  const [value, setValue] = React.useState(0);
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
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        Passport: "",
      },
      validationSchema: RegisterSchema,
      onSubmit: () => {},
    },
    {
      initialValues: {
        email: "",
        password: "",
        remember: true,
      },
      validationSchema: LoginSchema,
      onSubmit: () => {},
    }
  );

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setphoneNumber(event.target.value);
    setSelectedValue(event.target.value);
  };
  const [phoneNumber, setphoneNumber] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("a");
  return (
    <>
      <Box sx={{ width: "100vh", height: "130vh" }}>
        <ContentStyle>
          <Box sx={{ mb: -5 }} />
          <Typography variant="h4">회원정보 수정</Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="subtitle1" fontWeight="Bold" align="left" />
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  type="email"
                  label="이메일 (아이디)"
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label="비밀번호"
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
              <Grid>
                <Stack spacing={3}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="Bold"
                    align="left"
                  ></Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      fullWidth
                      label="성"
                      {...getFieldProps("firstName")}
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                    <TextField
                      fullWidth
                      label="이름"
                      {...getFieldProps("lastName")}
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </Stack>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Box sx={{ minWidth: 100 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          variant="standard"
                          htmlFor="uncontrolled-native"
                        ></InputLabel>
                        <NativeSelect
                          defaultValue={10}
                          inputProps={{
                            name: "PhoneNumber",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option value={10}>010</option>
                          <option value={20}>011</option>
                          <option value={30}>019</option>
                        </NativeSelect>
                      </FormControl>
                    </Box>
                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="text"
                      label="휴대전화 번호"
                    />
                  </Stack>
                  <TextField
                    fullWidth
                    autoComplete="username"
                    type="text"
                    label="주소"
                  />
                  <TextField
                    fullWidth
                    autoComplete="username"
                    type="text"
                    label="여권번호"
                  />

                  <TextField
                    fullWidth
                    autoComplete="username"
                    type="text"
                    label="생년월일"
                  />
                  <Typography variant="text" fontWeight="Bold" align="left">
                    성별
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <Radio
                        checked={selectedValue === "a"}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                      />
                      여자 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Radio
                        checked={selectedValue === "b"}
                        onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "B" }}
                      />
                      남자
                    </Typography>
                  </Typography>

                  {/* 결제 수단 관리 */}
                  <Typography
                    variant="subtitle1"
                    fontWeight="Bold"
                    align="left"
                  >
                    결제 수단
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Box sx={{ minWidth: 100 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          variant="standard"
                          htmlFor="uncontrolled-native"
                        ></InputLabel>
                        <NativeSelect defaultValue={10}>
                          <option value={10}>Visa</option>
                          <option value={20}>Master</option>
                          <option value={30}>Union</option>
                        </NativeSelect>
                      </FormControl>
                    </Box>
                    <TextField fullWidth type="text" label="카드번호" />
                  </Stack>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField fullWidth label="만료일 MM/YY" />
                    <TextField fullWidth label="CVV 123" />
                    <TextField fullWidth label="우편번호" />
                  </Stack>
                </Stack>
              </Grid>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
              ></Stack>
            </Form>
          </FormikProvider>
        </ContentStyle>
        <br />
        <br />
        <Typography variant="subtitle2" sx={{ mt: 3, textAlign: "center" }}>
          <button>
            <Link to="/Mypage" component={RouterLink}>
              회원정보 수정 완료
            </Link>
          </button>
        </Typography>
      </Box>
    </>
  );
}
