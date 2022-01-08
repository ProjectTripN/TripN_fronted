import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  
  colors,
} from "@material-ui/core";
import { lastSixMonth } from "../reducer/adminSlice";

const MonthReports = (props) => {
  const sixMonth = useSelector((state) => state.admin.lastSixMonthState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lastSixMonth());
  }, []); 
  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [
          sixMonth["5번째"][1],
          sixMonth["4번째"][1],
          sixMonth["3번째"][1],
          sixMonth["2번째"][1],
          sixMonth["1번째"][1],
          sixMonth["0번째"][1],
     
        ],
        label: "이번년도",
        maxBarThickness: 10,
      },
      {
        backgroundColor: colors.grey[200],
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [11, 5, 12, 29, 20, 25],
        label: "전년도",
        maxBarThickness: 10,
      },
    ],
    labels: [
      sixMonth["5번째"][0],
      sixMonth["4번째"][0],
      sixMonth["3번째"][0],
      sixMonth["2번째"][0],
      sixMonth["1번째"][0],
      sixMonth["0번째"][0],
    ],
  };
  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Card {...props}>
      <CardHeader title="최근 6개월 예약 건수" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 446,
            position: "relative",
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MonthReports;
