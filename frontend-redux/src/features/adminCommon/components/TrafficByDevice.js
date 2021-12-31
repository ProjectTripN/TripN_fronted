import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  colors,
  useTheme,
} from "@material-ui/core";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import HomeIcon from "@mui/icons-material/Home";
import SurfingIcon from "@mui/icons-material/Surfing";
import { useDispatch, useSelector } from "react-redux";
import { salesItem } from "../reducer/adminSlice";

const TrafficByDevice = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const plane = useSelector((state) => state.admin.salesItemState["plane12"]);
  const acc = useSelector((state) => state.admin.salesItemState["acc12"]);
  const activity = useSelector(
    (state) => state.admin.salesItemState["activity12"]
  );
  console.log("항목별 매출 찾아오기 항공, 엑티비티, 숙박!!" + plane);

  useEffect(() => {
    dispatch(salesItem());
    console.log("보낸다");
  }, []);

  // // 퍼 계산
  const planePer = (plane / (plane + acc + activity)) * 100;
  const accPer = (acc / (plane + acc + activity)) * 100;
  const activityPer = (activity / (plane + acc + activity)) * 100;
  // const accPer = (100/(100+300+2000))*100
  // const actPer = (100/(100+300+2000))*100
  console.log("ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ" + planePer);

  const data = {
    datasets: [
      {
        data: [planePer, accPer, activityPer],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
        ],
        borderWidth: 5,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["항공", "숙박", "액티비티"],
  };

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const devices = [
    {
      title: "항공",
      value: plane.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      icon: AirplanemodeActiveIcon,
      color: colors.indigo[500],
    },
    {
      title: "숙박",
      value: acc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      icon: HomeIcon,
      color: colors.red[600],
    },
    {
      title: "액티비티",
      value: activity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      icon: SurfingIcon,
      color: colors.orange[600],
    },
  ];

  return (
    <>
      <Card {...props}>
        <h1 align="center">항목별 매출</h1>
        {/* <CardHeader title="항목별 매출" /> */}
        <Divider />
        <CardContent>
          <Box
            sx={{
              height: 285,
              position: "relative",
            }}
          >
            <Doughnut data={data} options={options} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {devices.map(({ color, icon: Icon, title, value }) => (
              <Box
                key={title}
                sx={{
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Icon color="action" />
                <Typography color="textPrimary" variant="body1">
                  {title}
                </Typography>
                <Typography style={{ color }} variant="h4">
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default TrafficByDevice;
