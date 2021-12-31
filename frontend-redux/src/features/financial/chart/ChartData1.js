// ---------- 사용안함! 

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profitSixmonth } from "features/adminCommon/reducer/adminSlice";

// const ChartDataOne = () => {
//   const dispatch = useDispatch();
//   console.log("sixmonttttttt====ttttasfdasdfasd");
//   const a = useSelector((state) => state.admin.profitSixmonthState[0]);
//   console.log("sixmontttttttttttasfdasdfasd" + JSON.stringify(a));
//   alert("sixmontttttttttttasfdasdfasd" + JSON.stringify(a));

//   useEffect(() => {
//     dispatch(profitSixmonth());
//     console.log("+++++++++++++보낸다");
//   }, []);

//   return <></>;
// };

// const ChartData1 = [
//   {
//     Month: "몇월인지 들어오면 됩니다아다아당",
//     매출원가: 147,
//     매출원가Color: "hsl(142, 70%, 50%)",
//     "판매비와 관리비": 122,
//     "판매비와 관리비Color": "hsl(262, 70%, 50%)",
//     "지급 수수료": 122,
//     "지급 수수료Color": "hsl(262, 70%, 50%)",
//     기타비용: 147,
//     기타비용Color: "hsl(142, 70%, 50%)",
//     금융비용: 154,
//     금융비용Color: "hsl(356, 70%, 50%)",
//   },
//   {
//     Month: "2",
//     매출원가: 147,
//     매출원가Color: "hsl(142, 70%, 50%)",
//     "판매비와 관리비": 122,
//     "판매비와 관리비Color": "hsl(262, 70%, 50%)",
//     "지급 수수료": 122,
//     "지급 수수료Color": "hsl(262, 70%, 50%)",
//     기타비용: 147,
//     기타비용Color: "hsl(142, 70%, 50%)",
//     금융비용: 154,
//     금융비용Color: "hsl(356, 70%, 50%)",
//   },
//   {
//     Month: "3",
//     매출원가: 147,
//     매출원가Color: "hsl(142, 70%, 50%)",
//     "판매비와 관리비": 122,
//     "판매비와 관리비Color": "hsl(262, 70%, 50%)",
//     "지급 수수료": 122,
//     "지급 수수료Color": "hsl(262, 70%, 50%)",
//     기타비용: 147,
//     기타비용Color: "hsl(142, 70%, 50%)",
//     금융비용: 154,
//     금융비용Color: "hsl(356, 70%, 50%)",
//   },
//   {
//     Month: "4",
//     매출원가: 147,
//     매출원가Color: "hsl(142, 70%, 50%)",
//     "판매비와 관리비": 122,
//     "판매비와 관리비Color": "hsl(262, 70%, 50%)",
//     "지급 수수료": 122,
//     "지급 수수료Color": "hsl(262, 70%, 50%)",
//     기타비용: 147,
//     기타비용Color: "hsl(142, 70%, 50%)",
//     금융비용: 154,
//     금융비용Color: "hsl(356, 70%, 50%)",
//   },
//   {
//     Month: "5",
//     매출원가: 147,
//     매출원가Color: "hsl(142, 70%, 50%)",
//     "판매비와 관리비": 122,
//     "판매비와 관리비Color": "hsl(262, 70%, 50%)",
//     "지급 수수료": 122,
//     "지급 수수료Color": "hsl(262, 70%, 50%)",
//     기타비용: 147,
//     기타비용Color: "hsl(142, 70%, 50%)",
//     금융비용: 154,
//     금융비용Color: "hsl(356, 70%, 50%)",
//   },
//   {
//     Month: "6",
//     매출원가: 147,
//     매출원가Color: "hsl(142, 70%, 50%)",
//     "판매비와 관리비": 122,
//     "판매비와 관리비Color": "hsl(262, 70%, 50%)",
//     "지급 수수료": 122,
//     "지급 수수료Color": "hsl(262, 70%, 50%)",
//     기타비용: 147,
//     기타비용Color: "hsl(142, 70%, 50%)",
//     금융비용: 154,
//     금융비용Color: "hsl(356, 70%, 50%)",
//   },
// ];
// export default ChartData1;
