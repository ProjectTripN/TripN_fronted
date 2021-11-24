import React from "react";
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function JoinPrivacyPolicy() {
    return (
        <>
        <h1>가입약관 동의</h1>
        <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
            &nbsp;
            <Link to="/login" component={RouterLink}>
            가입 완료
            </Link>
        </Typography>
        </>
    )
}