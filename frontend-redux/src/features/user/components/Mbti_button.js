import * as React from 'react';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';

function Mbti_button() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}
    >
      <Button
        href="/mbti/home"
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
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
  );
}

export default Mbti_button;
