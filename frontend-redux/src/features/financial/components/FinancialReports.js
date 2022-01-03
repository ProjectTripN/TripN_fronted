import React from "react";
import styled from "styled-components";
import { AppAppBar, Navigation } from "features/adminCommon";
import { useSelector } from "react-redux";

const FinancialReports = () => {
  const thisYear = useSelector((state) => state.admin.yearchartState[0]);
  

  return (
    <>
      <AppAppBar />
      <div className="container" textAlign="right">
        <Table>
          <br />
          <br />
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              <h1>손익계산서</h1>
            </td>
          </tr>
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              당기 : 2021년 1월 1일부터 2021년 12월 31일까지
            </td>
          </tr>
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              전기 : 2020년 1월 1일부터 2020년 12월 31일까지
            </td>
          </tr>
          <br />
          <br />
          <Tr>
            <Tdword>항목</Tdword>
            <Tdword colSpan="2">당기금액</Tdword>
            <Tdword colSpan="2">전기금액</Tdword>
          </Tr>
          <Tr>
            <Tdword>매출액</Tdword>
            <Td></Td>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[0])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
          </Tr>
          <Tr>
            <Tdword>매출원가</Tdword>
            <Td></Td>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[1])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
          </Tr>
          <Tr>
            <Tdword>매출총이익</Tdword>
            <Td></Td>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[2])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
          </Tr>
          <Tr>
            <Tdword>판매비와관리비</Tdword>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[3])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Tdword>지급수수료</Tdword>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[4])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Tdword>영업이익</Tdword>
            <Td></Td>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[5])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
          </Tr>
          <Tr>
            <Tdword>기타손익 및 금융손익</Tdword>
            <Td></Td>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[6])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
          </Tr>
          <Tr>
            <Tdword>기타수익</Tdword>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[7])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Tdword>기타비용</Tdword>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[8])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Tdword>금융수익</Tdword>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[9])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Tdword>금융비용</Tdword>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[10])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Tdword>당기순이익</Tdword>
            <Td></Td>
            <Td>1</Td>
            <Td></Td>
            <Td>
              {useSelector((state) => state.admin.yearchartState[11])
                ["price"].toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Td>
          </Tr>
        </Table>
      </div>
    </>
  );
};

export default FinancialReports;

const Table = styled.table`
  align: center;
  height: 100%;
  width: 90%;
  margin: 1%;
  margin-left: 100px;
`;

const Tr = styled.tr`
  text-align: center;
`;

const Tdword = styled.td`
  height: 40px;
  width: 100px;
  text-align: center;
  border: 1px solid black;
`;

const Td = styled.td`
  height: 40px;
  width: 100px;
  text-align: right;
  border: 1px solid black;
  padding-right: 1em;
`;
