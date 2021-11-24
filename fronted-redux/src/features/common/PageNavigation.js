import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

export default function PageNavigation  () {
    return(
    <Nav>
        <ol><Link to="/home">Home</Link></ol>
        <ol><Link to="/myPage">My page</Link></ol>
        {/* <ol><Link to="/joinfirst">JoinFrist</Link></ol> */}
        <ol><Link to="/join">Join</Link></ol>       
        <ol><Link to="/login">Login</Link></ol>       
    </Nav>)
};


const Nav = styled.div`
    width: 100%;
    height: 30px;
    // border-bottom: 1px solid #d1d8e4;
`