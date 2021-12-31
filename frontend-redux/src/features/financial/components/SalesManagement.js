import React, { useEffect } from "react";
import { AppAppBar } from "features/adminCommon";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  Chart1,
  Chart2,
  Chart3,
  Chart4,
  // ChartData1,
  ChartData2,
  ChartData3,
  ChartData4,
} from "features/financial";
import { profitSixmonth } from "features/adminCommon/reducer/adminSlice";

const SalesManagement = () => {
   const dispatch = useDispatch();
    const a = useSelector((state) => state.admin.profitSixmonthState);
    console.log("sixmontttttttttttasfdasdfasd" + JSON.stringify(a));

  
    useEffect(() => {
      dispatch(profitSixmonth());
      console.log("+++++++++++++보낸다");
    }, []);


  const ChartData1 = [
    {
      Month: "몇월인지 들어오면 됩니다아다아당",
      매출원가: 147,
      매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": 122,
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": 122,
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: 147,
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: 154,
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: "2",
      매출원가: 147,
      매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": 122,
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": 122,
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: 147,
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: 154,
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: "3",
      매출원가: 147,
      매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": 122,
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": 122,
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: 147,
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: 154,
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: "4",
      매출원가: 147,
      매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": 122,
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": 122,
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: 147,
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: 154,
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: "5",
      매출원가: 147,
      매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": 122,
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": 122,
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: 147,
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: 154,
      금융비용Color: "hsl(356, 70%, 50%)",
    },
    {
      Month: "6",
      매출원가: 147,
      매출원가Color: "hsl(142, 70%, 50%)",
      "판매비와 관리비": 122,
      "판매비와 관리비Color": "hsl(262, 70%, 50%)",
      "지급 수수료": 122,
      "지급 수수료Color": "hsl(262, 70%, 50%)",
      기타비용: 147,
      기타비용Color: "hsl(142, 70%, 50%)",
      금융비용: 154,
      금융비용Color: "hsl(356, 70%, 50%)",
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
}

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
