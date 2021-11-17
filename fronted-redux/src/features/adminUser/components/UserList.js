import React from 'react'
import { Navigation, AppAppBar } from 'features/adminCommon'
import styled from 'styled-components'

const UserList = () => {
    return (<>
        <AppAppBar />
        <div className='container' >
            <Navigation className='navi' />
            <Table>
                <Tr>
                    <Td>
                        <label>이름:<input type="text" title="search" /></label><br /><br />
                        <label>생년월일:<input type="text" title="search" placeholder="No Hyphen" /></label><br /><br />
                        <label>휴대폰번호:<input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="No Hyphen" /></label>
                        <p><input type="submit" value="search" /></p>
                    </Td>
                </Tr>
                <Tr>
                    <Chartth>회원 기본정보</Chartth>
                    <Chartth>회원 상세정보</Chartth>
                </Tr>
            </Table>
        </div>
    </>)
}

export default UserList

const Table = styled.table`
    height:100%;
`

const Tr = styled.tr`
    height:100%;
`

const Chartth = styled.th`
    
`
const Td = styled.td`
    width:center;
`
