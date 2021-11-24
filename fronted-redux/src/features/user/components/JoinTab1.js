import React from 'react';
import { Box,  Link,  Typography, Radio, InputLabel, FormControl,  NativeSelect, Modal 
 } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Stack, TextField, IconButton, InputAdornment ,Button,Divider, Grid} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

export default function JoinTab1() {
    const [showPassword, setShowPassword] = useState(false);
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
    });
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSelectedValue(event.target.value);
    };
    const { errors, touched, handleSubmit, getFieldProps } = formik;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedValue, setSelectedValue] = React.useState('a');

    return (
        <>
        <Divider sx={{ my: 1 }}/>
            <Typography>  &nbsp; </Typography>
            <Typography variant="subtitle1" fontWeight='Bold' align='left'>
                로그인 정보
            </Typography>
            <Typography>  &nbsp; </Typography>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="이메일 (아이디)"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />
                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="비밀번호"
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
                    <Typography variant="subtitle1" fontWeight='Bold'  align='left'>
                    개인  회원 정보
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                        fullWidth
                        label="성"
                        {...getFieldProps('firstName')}
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        />
                        <TextField
                        fullWidth
                        label="이름"
                        {...getFieldProps('lastName')}
                        error={Boolean(touched.lastName && errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Box sx={{ minWidth: 100  }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        </InputLabel>
                        <NativeSelect
                        defaultValue={10}
                        inputProps={{
                            name: 'PhoneNumber',
                            id: 'uncontrolled-native',
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
                    <Typography variant='text' fontWeight='Bold' align='left'  >
                    성별
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}> 
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />여자 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio
                            checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value="b"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />남자
                    </Typography>
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Typography variant='text' fontWeight='Bold' align='left'  >
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
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />휴대전화번호
                        <Radio
                            checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value="b"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />이메일
                        </Typography>
                        <Typography id="modal-modal-title" variant="overline" component="h2">
                            abcd @ naver.com로 인증번호를 발송합니다.
                            <Button size='large'>발송</Button>
                        </Typography>
                        <Typography id="modal-modal-title" variant="overline" component="h2">
                        <TextField id="outlined-basic" label="인증 번호를 입력해주세요" variant="outlined" />
                            <Button size='large' >확인</Button>
                        </Typography>
                        <Divider sx={{ my: 3 }}>
                        <Typography variant="overline" component="h2">
                        이메일로 발송된 인증 번호를 입력해 주세요.
                        </Typography>
                        <Typography variant="overline" component="h2">
                        서비스 시점에 따라, 이메일 수신이 최대 5분정도 지연될 수 있습니다.
                        </Typography>
                        </Divider>
                        </Box>
                    </Modal>
                    </Stack>
                    </Stack>
                </Form>
            </FormikProvider>
        <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
            &nbsp;
            <Link to="/preference" component={RouterLink}>
            본인 인증 완료
            </Link>
        </Typography> 
        </>
  );
}