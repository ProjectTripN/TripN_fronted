import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Divider, Typography } from "@mui/material";
import { MyLayout } from "features/common";
import { myReservation } from "features/recommand/reducer/recommandSlice";

export default function MyPage() {
  // const dispatch = useDispatch();
  // const aaa = useSelector((state) => state.recommand.myReservationState[0]);

  // console.log(aaa);

  // useEffect(() => {
  //   dispatch(myReservation({ user: 5 }));
  // }, []);

  return (
    <>
      <MyLayout>
        <Box sx={{ width: "100vh", height: "auto" }}>
          <Grid>
            <Typography color="textPrimary" gutterBottom variant="h4" align="">
              다가오는 여행
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography color="textPrimary" gutterBottom variant="body1">
              <h4 id="count" />
            </Typography>
            <h1>바우처 / 스케줄 넣어주기 </h1>
          </Grid>
        </Box>
      </MyLayout>
    </>
  );
}
