import React from 'react'
import { Navigation, AppAppBar } from 'features/adminCommon'
import 'features/adminCommon/components/grid.css'
import styled from 'styled-components'

export default function SalesManagement() {
    return (<>
        <AppAppBar />
        <div className='container' >
            <Navigation className='navi' />
            <Table>
                <Tr>
                    <Chartth>차트1</Chartth>
                    <Chartth>차트2</Chartth>
                </Tr>
                <Tr>
                    <Chartth>차트3</Chartth>
                    <Chartth>차트4</Chartth>
                </Tr>
            </Table>
        </div>
    </>)
}


const Table = styled.table`
    height:100%;
`

const Tr = styled.tr`
    height:100%;
`

const Chartth = styled.th`
    height:400px;
`