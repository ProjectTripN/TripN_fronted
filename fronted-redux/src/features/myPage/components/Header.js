import React from "react";
import { Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
    return(
        <>
        <container  >
        <Button variant="text" text-align="right" >
        <Link to="/home" component={RouterLink}>Home</Link>
        </Button>
        <Button variant="text" text-align="right">
        <Link to="/home" component={RouterLink}>Logout</Link></Button>
        </container >
        </>
    )
}