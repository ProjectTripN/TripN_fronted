import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Stack, Link, Container, Typography, TextField } from "@mui/material";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useDispatch } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { TripLayout } from "features/common";
import { forgotPassword } from "../reducer/userSlice";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: 0,
}));

export default function ForgotPassword() {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("address must be a valid address address")
      .required("address is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      remember: true,
    },
    validationSchema: LoginSchema,
  });

  const { errors, touched, isSubmitting, values, getFieldProps } = formik;

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    alert(JSON.stringify(values));

    dispatch(forgotPassword(values));
  };

  return (
    <>
      <TripLayout>
        <Container>
          <ContentStyle>
            <Stack sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                Forgot your Password?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                가입시 입력하신 이메일로 비밀번호를 보내드리겠습니다.
              </Typography>
            </Stack>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    type="email"
                    label="아이디 (이메일 입력)"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
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
                >
                  이메일로 링크 보내기
                </LoadingButton>
              </Form>
            </FormikProvider>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              홈페이지로 돌이가기 &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="/home">
                Click!
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </TripLayout>
    </>
  );
}
