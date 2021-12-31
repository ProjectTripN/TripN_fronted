import React from "react";
import { Helmet } from "react-helmet";
import { Container, Grid } from "@material-ui/core";
import {
  Budget,
  LatestOrders,
  LatestSales,
  TotalCustomers,
  TotalProfit,
  TrafficByDevice,
  TotalProfit2,
} from "features/adminCommon";

import "features/adminCommon/components/grid.css";
import AppAppBar from "../layout/AdminLayout";

export default function Dashboard() {
  return (
    <>
      <AppAppBar />
      <Helmet>
        <title>Dashboard | TripN Admin</title>
      </Helmet>
      <br />
      <br />
      <div className="container">
        <Container maxWidth={false} className="item1">
          <Grid container spacing={1}>
            <Grid item xl={4} lg={4} sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item xl={4} lg={4} sm={6} xl={3} xs={12}>
              <TotalProfit2 />
            </Grid>
            <Grid item xl={4} lg={4} sm={6} xl={3} xs={12}>
              <TotalCustomers />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalProfit sx={{ height: "100%" }} />
            </Grid>
            {/* ---- */}
            <Grid item xl={4} lg={4} md={1} xl={7} xs={12}>
              <LatestSales />
            </Grid>
            <Grid item xl={4} lg={4} md={6} xl={5} xs={12}>
              <TrafficByDevice sx={{ height: "100%" }} />
            </Grid>
            <Grid item xl={4} lg={12} md={18} xl={12} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
