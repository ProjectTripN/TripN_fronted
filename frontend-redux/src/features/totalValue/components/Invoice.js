import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

// const TAX_RATE = 0.1;
// const FEE_RATE = 0.2;

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow("Flight (*좌석)", 4, 75890),
//   createRow("Accomodation (*박)", 2, 436090),
//   createRow("Acitivity (*인원)", 4, 30000),
// ];

// const invoiceSub = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSub;
// const invoiceSubTotal = invoiceTaxes + invoiceSub;
// const invoiceFees = FEE_RATE * invoiceSubTotal;
// const invoiceTotal = invoiceFees + invoiceSubTotal;

export default function Invoice() {
  const value = useSelector((state) => state.recommandSlice.saveState[0]);
  const payment = value[1];

  return (
    <div>
      <h1> Invoice </h1>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">금액</TableCell>
              <TableCell align="right">수량</TableCell>
              <TableCell align="right">총액</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
              <TableRow>
                <TableCell>Flight (*좌석 / 왕복)</TableCell>
                <TableCell align="right">{payment["plane_unit"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                <TableCell align="right">{payment["people"]}</TableCell>
                <TableCell align="right">{payment["plane_price"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Accomodation (*박)</TableCell>
                <TableCell align="right">{payment["acc_unit"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                <TableCell align="right">{payment["day"]}</TableCell>
                <TableCell align="right">{payment["acc_price"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Acitivity (*인원)</TableCell>
                <TableCell align="right">{payment["act_unit"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                <TableCell align="right">{payment["people"]}</TableCell>
                <TableCell align="right">{payment["act_price"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              </TableRow>

            <TableRow>
              <TableCell rowSpan={4} />
              <TableCell>Tax</TableCell>
              <TableCell align="right">10 %</TableCell>
              <TableCell align="right">{payment["tax"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{payment["subtotal"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fee</TableCell>
              <TableCell align="right">20 %</TableCell>
              <TableCell align="right">{payment["fees"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{payment["total_price"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
