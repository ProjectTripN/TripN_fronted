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
  Button,
  FormControl,
  Divider,
  Radio,
} from "@mui/material";
import { useFormik, Form, FormikProvider } from "formik";
import { useDispatch } from "react-redux";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { userModify } from "features/user/reducer/userSlice";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function UserModifyCom() {
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState(0);
  const [showPassword, setShowPassword] = useState(false);

  // const handleChange = (e) => {
  //   setCardCompany({ [e.target.nam]: e.target.val });
  // };
  // const [cardCompany, setCardCompany] = useState("");
  // console.log(JSON.stringify(cardCompany));
  // const [cardCompany] = cardCompany;

  // const handleChange = (e) => {
  //   setCardCompany({ [e.target.nam]: e.target.val });
  // };
  const user = JSON.parse(window.localStorage.getItem("sessionUser"));
  // console.log(user["userId"]);

  const formik = useFormik({
    initialValues: {
      userId: user["userId"],
      password: "admin",
      checkPassword: "admin",
      name: "admin",
      lastName: "admin",
      firstName: "admin",
      phoneNumber: "01012345678",
      email: "admin@gmail.com",
      address: "서울 강남구",
      passport: "m12345678",
      birth: "211225",
      gender: "여자",
      cardCompany: "visa",
      cardNumber: "000000000000",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // console.log(JSON.stringify(values));

    alert(JSON.stringify(values));

    await dispatch(userModify(values));
  };

  const { errors, touched, values, isSubmitting, getFieldProps } = formik;


  //----------------프로필 사진 업로드
  // 담을 state
  const [selectedFile, setSelectedFile] = useState(null);
  // onChange역할
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  // formData라는 instance에 담아 보냄
  const handleFileUpload = async (e ) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData();
    formData.append("userfile", selectedFile, selectedFile.name);
    // await dispatch(uploadIMG(formData));
  };

  return (
    <>
      <Box sx={{ width: "100vh", height: "170vh" }}>
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
                  type={showPassword ? "text" : "checkPassword"}
                  label="비밀번호 확인"
                  {...getFieldProps("checkPassword")}
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
                      label="성명"
                      text="name"
                      {...getFieldProps("name")}
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </Stack>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      fullWidth
                      label="영문 성"
                      text="lastName"
                      {...getFieldProps("lastName")}
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                    <TextField
                      fullWidth
                      label="영문 성 "
                      text="firstName"
                      {...getFieldProps("firstName")}
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </Stack>
                  <TextField
                    fullWidth
                    type="text"
                    label="주소"
                    text="address"
                    {...getFieldProps("address")}
                  />
                  <TextField
                    fullWidth
                    type="text"
                    label="여권번호"
                    text="passport"
                    {...getFieldProps("passport")}
                  />

                  <TextField
                    fullWidth
                    type="text"
                    label="생년월일"
                    text="birth"
                    {...getFieldProps("birth")}
                  />
<Divider sx={{ my: 3 }} />
                  <Typography
                    variant="subtitle1"
                    fontWeight="Bold"
                    align="left"
                  >
                    프로필 사진 변경
                  </Typography>
                  <input
                    alignItems="center"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <Button
                    onClick={handleFileUpload}
                    style={{ minWidth: "200px" }}
                  >
                    프로필 사진 변경
                    <Icon
                      icon="fluent:picture-in-picture-exit-20-regular"
                      color="#553830"
                      height={30}
                    />
                  </Button>
                  <Divider />
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
                        <NativeSelect
                          defaultValue={"visa"}
                          // value={cardCompany}
                          // onChange={handleChange}
                          // name="cardCompany"
                          // value={cardCompany}
                          label="cardCompany"
                          text="cardCompany"

                          // name="cardCompany"
                          // values={cardCompany}
                          // values={cardCompany}
                          // --------
                          // text=cardCompany
                        >
                          <option value="visa">Visa</option>
                          <option value="master">Master</option>
                          <option value="union">Union</option>
                        </NativeSelect>
                      </FormControl>
                    </Box>
                    <TextField
                      fullWidth
                      type="text"
                      label="카드번호"
                      text="cardNumber"
                      {...getFieldProps("cardNumber")}
                    />
                  </Stack>
                </Stack>
              </Grid>
              <Typography
                variant="subtitle2"
                sx={{ mt: 3, textAlign: "center" }}
              >
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  회원정보 수정 완료
                </Button>
              </Typography>
            </Form>
          </FormikProvider>
        </ContentStyle>
      </Box>
    </>
  );
}
