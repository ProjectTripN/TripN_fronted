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
  // const costDetails = useSelector((state) => state.admin.costDetailsState[0]);
  // console.log("aaaaaaaaaaaaa" + JSON.parse(costSix[0]["월"]));
  // console.log("sixmontttttttttttasfdasdfasd" + JSON.parse(costSix[0]["월"]));
  // useEffect(() => {
  //   dispatch(costSixmonth());
  //   console.log("+++++++++++++보낸다");
  // }, []);

  const ChartData2 = [
    // {
    //   id: "매출원가",
    //   label: "매출원가",
    //   value: 148,
    //   color: "hsl(224, 70%, 50%)",
    // },
    {
      id: "판매비와 관리비",
      label: "판매비와 관리비",
      value: 23564907,
      color: "hsl(224, 70%, 50%)",
    },
    {
      id: "지급수수료",
      label: "지급수수료",
      value: 6467847,
      color: "hsl(247, 70%, 50%)",
    },
    {
      id: "기타비용",
      label: "기타비용",
      value: 6043818,
      color: "hsl(142, 70%, 50%)",
    },
    {
      id: "금융비용",
      label: "금융비용",
      value: 7461120,
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
      id: "매출 총 이익",
      color: "hsl(156, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 125867986,
        },
        {
          x: "2",
          y: 114133899,
        },
        {
          x: "3",
          y: 123936353,
        },
        {
          x: "4",
          y: 165208431,
        },
        {
          x: "5",
          y: 148266057,
        },
        {
          x: "6",
          y: 112290639,
        },
        {
          x: "7",
          y: 74696153,
        },
        {
          x: "8",
          y: 90631126,
        },
        {
          x: "9",
          y: 129720087,
        },
        {
          x: "10",
          y: 142943231,
        },
        {
          x: "11",
          y: 119593004,
        },
        {
          x: "12",
          y: 124902834,
        },
      ],
    },
    {
      id: "영업이익",
      color: "hsl(356, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 119887673,
        },
        {
          x: "2",
          y: 105185297,
        },
        {
          x: "3",
          y: 117720612,
        },
        {
          x: "4",
          y: 154974344,
        },
        {
          x: "5",
          y: 137017567,
        },
        {
          x: "6",
          y: 101812659,
        },
        {
          x: "7",
          y: 70227496,
        },
        {
          x: "8",
          y: 86520405,
        },
        {
          x: "9",
          y: 122935725,
        },
        {
          x: "10",
          y: 134995625,
        },
        {
          x: "11",
          y: 105720755,
        },
        {
          x: "12",
          y: 115991916,
        },
      ],
    },
    {
      id: "기타수익",
      color: "hsl(233, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 13630521,
        },
        {
          x: "2",
          y: 10290186,
        },
        {
          x: "3",
          y: 10872552,
        },
        {
          x: "4",
          y: 2956986,
        },
        {
          x: "5",
          y: 10819857,
        },
        {
          x: "6",
          y: 15305469,
        },
        {
          x: "7",
          y: 10679409,
        },
        {
          x: "8",
          y: 12122739,
        },
        {
          x: "9",
          y: 20224395,
        },
        {
          x: "10",
          y: 14345925,
        },
        {
          x: "11",
          y: 23835936,
        },
        {
          x: "12",
          y: 10555254,
        },
      ],
    },
    {
      id: "금융수익",
      color: "hsl(67, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 7515570,
        },
        {
          x: "2",
          y: 14230797,
        },
        {
          x: "3",
          y: 12047307,
        },
        {
          x: "4",
          y: 20290692,
        },
        {
          x: "5",
          y: 2388633,
        },
        {
          x: "6",
          y: 8828853,
        },
        {
          x: "7",
          y: 14159805,
        },
        {
          x: "8",
          y: 9929754,
        },
        {
          x: "9",
          y: 11979702,
        },
        {
          x: "10",
          y: 10280790,
        },
        {
          x: "11",
          y: 15521382,
        },
        {
          x: "12",
          y: 10288488,
        },
      ],
    },
    {
      id: "당월순이익",
      color: "hsl(199, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 97864051,
        },
        {
          x: "2",
          y: 80299521,
        },
        {
          x: "3",
          y: 109606517,
        },
        {
          x: "4",
          y: 129428244,
        },
        {
          x: "5",
          y: 109653402,
        },
        {
          x: "6",
          y: 75217842,
        },
        {
          x: "7",
          y: 49393805,
        },
        {
          x: "8",
          y: 65728915,
        },
        {
          x: "9",
          y: 120715656,
        },
        {
          x: "10",
          y: 130488800,
        },
        {
          x: "11",
          y: 86395157,
        },
        {
          x: "12",
          y: 102208884,
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
              <ChartMargin>
                <div margin={"10px"}>
                  <h3>항목별 비용 상세</h3>
                </div>
                <Chartdiv>
                  <Chart2 data={ChartData2} />
                </Chartdiv>
              </ChartMargin>
            </Charttd>
            <ChartMbti rowSpan={2}>
              <ChartMargin>
                <h3>MBTI</h3>
                <Chartdiv>
                  <Chart3 data={ChartData3} />
                </Chartdiv>
              </ChartMargin>
            </ChartMbti>
          </Charttr>
          <Charttr>
            <Charttd>
              <ChartMargin>
                <h3>6개월 비용</h3>
                <Chartdiv>
                  <Chart1 data={ChartData1} />
                </Chartdiv>
              </ChartMargin>
            </Charttd>
          </Charttr>
          <Charttr>
            <Charttd colSpan="2">
              <ChartMargin>
                <h3>연간 이익</h3>
                <ChartYear>
                  <Chart4 data={ChartData4} />
                </ChartYear>
              </ChartMargin>
            </Charttd>
          </Charttr>
        </ChartTable>
      </div>
    </>
  );
};

export default SalesManagement;

const ChartTable = styled.table`
  height: 700px;
`;

const Charttr = styled.tr`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const ChartMargin = styled.div`
  margin: 30px;
`;

const Charttd = styled.td`
  margin: auto;
  padding: 1%;
`;

const ChartMbti = styled.td`
  margin: auto;
  padding: 1%;
  width: 600px;
`;

const Chartdiv = styled.div`
  display: block;
  margin: auto;
  width: 840px;
  height: 390px;
`;

const ChartYear = styled.div`
  display: block;
  margin: auto;
  width: 1200px;
  height: 390px;
`;
