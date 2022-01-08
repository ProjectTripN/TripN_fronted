import moment from "moment";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
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
  TableRow,
} from "@material-ui/core";

const orders = [
  {
    id: uuid(),
    ref: "admin",
    amount: 25.1,
    customer: {
      name: "1,458,329",
    },
    createdAt: 1555016400000,
    status: "delivered",
  },
  {
    id: uuid(),
    ref: "jihye yu",
    amount: 30.5,
    customer: {
      name: "1,213,982",
    },
    createdAt: 1555016400000,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "Ekaterina Tankova",
    amount: 30.5,
    customer: {
      name: "937,384",
    },
    createdAt: 1555016400000,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "minji Kim",
    amount: 30.5,
    customer: {
      name: "3,800,544",
    },
    createdAt: 1555016400000,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "yeojin youn",
    amount: 30.5,
    customer: {
      name: "4,789,000",
    },
    createdAt: 1555016400000,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "youngeun lee",
    amount: 30.5,
    customer: {
      name: "19,980,000",
    },
    createdAt: 1555016400000,
    status: "pending",
  },
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Latest Orders" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>고객명</TableCell>
              <TableCell>결제금액</TableCell>
              <TableCell>예약날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.ref}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>22/01/04</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
);

export default LatestOrders;
