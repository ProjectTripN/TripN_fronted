import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import {
  Box,
  Typography,
  Radio,
  InputLabel,
  FormControl,
  NativeSelect,
  Container,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Divider,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function JoinTab1() {
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    checkPassword: "",
    name: "",
    last_Name: "",
    first_Name: "",
    phone: "",
    email: "",
    address: "",
    passport: "",
    birth: "",
    gender: "여쟈",
    card_company: "",
    card_number: "",
  });

  const {
    username,
    password,
    checkPassword,
    name,
    last_Name,
    first_Name,
    email,
    phone,
    address,
    passport,
    birth,
    gender,
    card_company,
    card_number,
  } = signup;

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert(JSON.stringify(signup));
  };

  // const RegisterSchema = Yup.object().shape({
  //   firstName: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("First name required"),
  //   lastName: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Last name required"),
  //   email: Yup.string()
  //     .email("Email must be a valid email address")
  //     .required("Email is required"),
  //   password: Yup.string().required("Password is required"),
  // });

  const signupSchema = Yup.object().shape({
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

  // const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    console.log(event.target.name);
    setSignup({ ...signup, [event.target.name]: event.target.value });
    console.log(signup);
    // setphoneNumber(event.target.value);
    // setSelectedValue(event.target.value);
  };

  // const [phoneNumber, setphoneNumber] = React.useState("");
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [selectedValue, setSelectedValue] = React.useState("a");

  return (
    <>
      <Divider sx={{ my: 1 }} />
      <Typography
        variant="subtitle1"
        fontWeight="Bold"
        align="left"
        sx={{ my: 2 }}
      >
        회원가입 정보dkwpswkd
      </Typography>
      <form>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="아이디"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label="비밀번호"
            name="password"
            value={password}
            onChange={handleChange}
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
          />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label="비밀번호 확인"
            name="checkPassword"
            value={checkPassword}
            onChange={handleChange}
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
          />
          <Typography variant="subtitle1" fontWeight="Bold" align="left">
            개인 회원 정보
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }}>
            <TextField
              fullWidth
              label="성명"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="영문 성"
              name="last_Name"
              value={last_Name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="영문 이름"
              name="first_Name"
              value={first_Name}
              onChange={handleChange}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              type="text"
              label="핸드폰 번호"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              type="text"
              label="이메일"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Stack>
          <TextField
            fullWidth
            type="text"
            label="주소"
            name="address"
            value={address}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            type="text"
            label="여권번호"
            name="passport"
            value={passport}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            type="text"
            label="생년월일"
            name="birth"
            value={birth}
            onChange={handleChange}
          />
          <Typography variant="text" fontWeight="Bold" align="left">
            성별
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <Radio
                checked={gender === "여쟈"}
                onChange={handleChange}
                value="여쟈"
                name="gender"
                // name="radio-buttons"
                // inputProps={{ "aria-label": "A" }}
              />
              여자 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio
                checked={gender === "남자"}
                onChange={handleChange}
                value="남자"
                name="gender"
                // name="radio-buttons"
                // inputProps={{ "aria-label": "B" }}
              />
              남자
            </Typography>
          </Typography>

          {/* 결제 수단 관리 */}
          <Typography variant="subtitle1" fontWeight="Bold" align="left">
            결제 수단
          </Typography>
          <div>
            <input type="file" /> {/* onChange={handleFileChange} */}
            <Button>업로드</Button> {/* onClick={handleFileUpload} */}
            <br />
            카드 번호가 있는 면의 사진을 찍어 주세요.
          </div>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Box sx={{ minWidth: 80 }}>
              <FormControl fullWidth>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                ></InputLabel>
                <NativeSelect
                  name="card_company"
                  value={card_company}
                  onChange={handleChange}
                  defaultValue={"Visa"}
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
              name="card_number"
              value={card_number}
              onChange={handleChange}
            />
          </Stack>
          {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <TextField
                            fullWidth
                            label="만료일 MM/YY"
                            />
                            <TextField
                            fullWidth
                            label="CVV 123"
                            />
                            <TextField
                            fullWidth
                            label="우편번호"
                            />
                        </Stack>
                         */}
          {/* 본인 확인 */}
          {/* <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Typography variant="text" fontWeight="Bold" align="left">
              본인확인
            </Typography>
            <Button onClick={handleOpen}>본인확인하기</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  회원가입 인증
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  휴대전화번호
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                  이메일
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="overline"
                  component="h2"
                >
                  abcd @ naver.com로 인증번호를 발송합니다.
                  <Button size="large">발송</Button>
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="overline"
                  component="h2"
                >
                  <TextField
                    id="outlined-basic"
                    label="인증 번호를 입력해주세요"
                    variant="outlined"
                  />
                  <Button size="large">확인</Button>
                </Typography>
                <Divider sx={{ my: 3 }}>
                  <Typography variant="overline" component="h2">
                    이메일로 발송된 인증 번호를 입력해 주세요.
                  </Typography>
                  <Typography variant="overline" component="h2">
                    서비스 시점에 따라, 이메일 수신이 최대 5분정도 지연될 수
                    있습니다.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ mt: 3, textAlign: "center" }}
                  >
                    <Link to="/joinPrivacyPolicy" component={RouterLink}>
                      본인 인증 완료
                    </Link>
                  </Typography>
                </Divider>
              </Box>
            </Modal>
          </Stack> */}
        </Stack>
        <Container
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 2,
          }}
        >
          <Button
            component={Link}
            to="/mbti/home"
            sx={{
              border: "4px solid currentColor",
              borderRadius: 0,
              height: "auto",
              py: 2,
              px: 5,
            }}
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            <Typography variant="h4" component="span">
              Trip N 회원가입하기
            </Typography>
          </Button>
          <Typography variant="subtitle1" sx={{ my: 3 }}>
            버튼을 누르시면 개인 맞춤 분석을 위한 페이지로 이동합니다.
          </Typography>
        </Container>
        {/* ----------- */}
      </form>
    </>
  );
}
