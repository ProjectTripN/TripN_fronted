import React, { useEffect, useState } from "react";
import { AppAppBar } from "features/adminCommon";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  Chart1,
  Chart2,
  Chart3,
  Chart4,
  // ChartData2,
  ChartData3,
  // ChartData4,
  // ChartData1,
} from "features/financial";

const SalesManagement = () => {
  const costSix = useSelector((state) => state.admin.costSixmonthState[0]);
  console.log("aaaaaaaaaaaaa" + JSON.parse(costSix[0]["월"]));
  // console.log("sixmontttttttttttasfdasdfasd" + JSON.parse(costSix[0]["월"]));
  // useEffect(() => {
  //   dispatch(costSixmonth());
  //   console.log("+++++++++++++보낸다");
  // }, []);

  const ChartData2 = [
    {
      id: "매출원가",
      label: "매출원가",
      value: 148,
      color: "hsl(224, 70%, 50%)",
    },
    {
      id: "판매비와 관리비",
      label: "판매비와 관리비",
      value: 287,
      color: "hsl(224, 70%, 50%)",
    },
    {
      id: "지급수수료",
      label: "지급수수료",
      value: 108,
      color: "hsl(247, 70%, 50%)",
    },
    {
      id: "기타비용",
      label: "기타비용",
      value: 592,
      color: "hsl(142, 70%, 50%)",
    },
    {
      id: "금융비용",
      label: "금융비용",
      value: 492,
      color: "hsl(85, 70%, 50%)",
    },
  ];

  const ChartData1 = [
    {
      Month: `${JSON.parse(costSix[0]["월"])}월`,
      // 매출원가: JSON.parse(costSix[0]["매출원가"]),
      // 매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": JSON.parse(costSix[0]["판매비와관리비"]),
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": JSON.parse(costSix[0]["지급수수료"]),
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: JSON.parse(costSix[0]["기타비용"]),
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: JSON.parse(costSix[0]["금융비용"]),
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: `${JSON.parse(costSix[1]["월"])}월`,
      // 매출원가: JSON.parse(costSix[1]["매출원가"]),
      // 매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": JSON.parse(costSix[1]["판매비와관리비"]),
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": JSON.parse(costSix[1]["지급수수료"]),
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: JSON.parse(costSix[1]["기타비용"]),
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: JSON.parse(costSix[1]["금융비용"]),
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: `${JSON.parse(costSix[2]["월"])}월`,
      // 매출원가: JSON.parse(costSix[2]["매출원가"]),
      // 매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": JSON.parse(costSix[2]["판매비와관리비"]),
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": JSON.parse(costSix[1]["지급수수료"]),
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: JSON.parse(costSix[1]["기타비용"]),
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: JSON.parse(costSix[1]["금융비용"]),
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: `${JSON.parse(costSix[3]["월"])}월`,
      // 매출원가: JSON.parse(costSix[3]["매출원가"]),
      // 매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": JSON.parse(costSix[3]["판매비와관리비"]),
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": JSON.parse(costSix[3]["지급수수료"]),
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: JSON.parse(costSix[3]["기타비용"]),
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: JSON.parse(costSix[3]["금융비용"]),
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: `${JSON.parse(costSix[4]["월"])}월`,
      // 매출원가: JSON.parse(profitSix[4]["매출원가"]),
      // 매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": JSON.parse(costSix[4]["판매비와관리비"]),
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": JSON.parse(costSix[4]["지급수수료"]),
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: JSON.parse(costSix[4]["기타비용"]),
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: JSON.parse(costSix[4]["금융비용"]),
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: `${JSON.parse(costSix[5]["월"])}월`,
      // 매출원가: 147,
      // 매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": JSON.parse(costSix[5]["판매비와관리비"]),
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": JSON.parse(costSix[5]["지급수수료"]),
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: JSON.parse(costSix[5]["기타비용"]),
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: JSON.parse(costSix[5]["금융비용"]),
      금융비용Color: "hsl(356, 70%, 50%)",
    },
  ];

  const ChartData4 = [
    {
      id: "매출원가",
      color: "hsl(156, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 249,
        },
        {
          x: "2",
          y: 30,
        },
        {
          x: "3",
          y: 224,
        },
        {
          x: "4",
          y: 290,
        },
        {
          x: "5",
          y: 167,
        },
        {
          x: "6",
          y: 181,
        },
        {
          x: "7",
          y: 126,
        },
        {
          x: "8",
          y: 290,
        },
        {
          x: "9",
          y: 183,
        },
        {
          x: "10",
          y: 91,
        },
        {
          x: "11",
          y: 298,
        },
        {
          x: "12",
          y: 46,
        },
      ],
    },
    {
      id: "판매비와 관리비",
      color: "hsl(356, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 249,
        },
        {
          x: "2",
          y: 30,
        },
        {
          x: "3",
          y: 224,
        },
        {
          x: "4",
          y: 290,
        },
        {
          x: "5",
          y: 167,
        },
        {
          x: "6",
          y: 181,
        },
        {
          x: "7",
          y: 126,
        },
        {
          x: "8",
          y: 290,
        },
        {
          x: "9",
          y: 183,
        },
        {
          x: "10",
          y: 91,
        },
        {
          x: "11",
          y: 298,
        },
        {
          x: "12",
          y: 46,
        },
      ],
    },
    {
      id: "지급수수료",
      color: "hsl(233, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 249,
        },
        {
          x: "2",
          y: 30,
        },
        {
          x: "3",
          y: 224,
        },
        {
          x: "4",
          y: 290,
        },
        {
          x: "5",
          y: 167,
        },
        {
          x: "6",
          y: 181,
        },
        {
          x: "7",
          y: 126,
        },
        {
          x: "8",
          y: 290,
        },
        {
          x: "9",
          y: 183,
        },
        {
          x: "10",
          y: 91,
        },
        {
          x: "11",
          y: 298,
        },
        {
          x: "12",
          y: 46,
        },
      ],
    },
    {
      id: "기타비용",
      color: "hsl(67, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 249,
        },
        {
          x: "2",
          y: 30,
        },
        {
          x: "3",
          y: 224,
        },
        {
          x: "4",
          y: 290,
        },
        {
          x: "5",
          y: 167,
        },
        {
          x: "6",
          y: 181,
        },
        {
          x: "7",
          y: 126,
        },
        {
          x: "8",
          y: 290,
        },
        {
          x: "9",
          y: 183,
        },
        {
          x: "10",
          y: 91,
        },
        {
          x: "11",
          y: 298,
        },
        {
          x: "12",
          y: 46,
        },
      ],
    },
    {
      id: "금융비용",
      color: "hsl(199, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 249,
        },
        {
          x: "2",
          y: 30,
        },
        {
          x: "3",
          y: 224,
        },
        {
          x: "4",
          y: 290,
        },
        {
          x: "5",
          y: 167,
        },
        {
          x: "6",
          y: 181,
        },
        {
          x: "7",
          y: 126,
        },
        {
          x: "8",
          y: 290,
        },
        {
          x: "9",
          y: 183,
        },
        {
          x: "10",
          y: 91,
        },
        {
          x: "11",
          y: 298,
        },
        {
          x: "12",
          y: 46,
        },
      ],
    },
  ];

  return (
    <>
      <AppAppBar />
      <div className="container">
        <ChartTable>
          <Charttr>
            <Charttd>
              <h3>항목별 비용 상세</h3>
              <Chartdiv>
                <Chart2 data={ChartData2} />
              </Chartdiv>
            </Charttd>
            <Charttd rowSpan={2}>
              <h3>MBTI</h3>
              <Chartdiv>
                <Chart3 data={ChartData3} />
              </Chartdiv>
            </Charttd>
          </Charttr>
          <Charttr>
            <Charttd>
              <h3>6개월 비용</h3>
              <Chartdiv>
                <Chart1 data={ChartData1} />
              </Chartdiv>
            </Charttd>
          </Charttr>
          <Charttr>
            <Charttd colSpan="2">
              <h3>연간 이익</h3>
              <Chartdiv>
                <Chart4 data={ChartData4} />
              </Chartdiv>
            </Charttd>
          </Charttr>
        </ChartTable>
      </div>
    </>
  );
};

export default SalesManagement;

const ChartTable = styled.table`
  width: 98%;
  height: 700px;
`;

const Charttr = styled.tr`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Charttd = styled.td`
  margin: auto;
  padding: 1%;
`;

const Chartdiv = styled.div`
  display: block;
  margin: auto;
  width: 840px;
  height: 390px;
`;
