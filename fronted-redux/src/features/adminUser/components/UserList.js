import React from 'react'
import { Navigation, AppAppBar } from 'features/adminCommon'
import styled from 'styled-components'
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Card,
    CardHeader,
    Chip,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core';

const orders = [
    {
        id: uuid(),
        ref: 'CDD1049',
        amount: 30.5,
        customer: {
            name: 'Ekaterina Tankova'
        },
        createdAt: 1555016400000,
        status: 'pending'
    },
    {
        id: uuid(),
        ref: 'CDD1048',
        amount: 25.1,
        customer: {
            name: 'Cao Yu'
        },
        createdAt: 1555016400000,
        status: 'delivered'
    },
    {
        id: uuid(),
        ref: 'CDD1047',
        amount: 10.99,
        customer: {
            name: 'Alexa Richardson'
        },
        createdAt: 1554930000000,
        status: 'refunded'
    }
];

const UserList = (props) => {
    return (<>
        <AppAppBar />
        <div className='container' >
            <Navigation className='navi' />
            <Card {...props}>
                <CardHeader title="Latest Orders" />
                <Divider />
                <PerfectScrollbar>
                    <Box sx={{ minWidth: 800 }}>
                        <Table>
                            <TableHead>
                                <Tr>
                                    <Td>
                                        <label>이름:<input type="text" title="search" /></label><br /><br />
                                        <label>생년월일:<input type="text" title="search" placeholder="No Hyphen" /></label><br /><br />
                                        <label>휴대폰번호:<input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="No Hyphen" /></label>
                                        <p><input type="submit" value="search" /></p>
                                    </Td>
                                </Tr>
                                <TableRow>
                                    <TableCell>
                                        Order Ref
                                    </TableCell>
                                    <TableCell>
                                        Customer
                                    </TableCell>
                                    <TableCell>
                                        Date
                                    </TableCell>
                                    <TableCell>
                                        Status
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow
                                        hover
                                        key={order.id}
                                    >
                                        <TableCell>
                                            {order.ref}
                                        </TableCell>
                                        <TableCell>
                                            {order.customer.name}
                                        </TableCell>
                                        <TableCell>
                                            {moment(order.createdAt).format('DD/MM/YYYY')}
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                color="primary"
                                                label={order.status}
                                                size="small"
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </PerfectScrollbar>
            </Card>
        </div>
    </>)
}

export default UserList


const Tr = styled.tr`
   
`
const Td = styled.td`
`