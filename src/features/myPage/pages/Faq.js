import React, { useEffect } from "react";
import { MyLayout } from "features/common";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Box, Pagination, Stack } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { faqList } from "features/myPage/reducer/mypageSlice";

function createData(name, calories, fat, carbs) {
  return {
    name,
    calories,
    fat,
    carbs,
    history: [
      {
        date: "2020-01-05",
      },
    ],
  };
}
// 애도 왠지 안쓰게될듯

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="left">{row.calories}</TableCell>
          <TableCell align="center">{row.fat}</TableCell>
          <TableCell align="center">{row.carbs}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                ></Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>응답</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {users.map((i, userId) => (
                  <TableRow key={userId}>
                    <TableCell>{i.userId}</TableCell>
                    <TableCell>{i.name}</TableCell>
                    
                  </TableRow>
                ))} */}

                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date + "응답할것이댜댜댣댜댜댷 "}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "1",
    "항공권은 어떻게 예약할 수 있나요?",
    "항공권",
    "발매 및 판매"
  ),
  createData(
    "2",
    "예약 완료 후 결제는 어디서 하면 되나요?",
    "예약",
    "발매 및 판매"
  ),
  createData(
    "3",
    "	객실을 미리 배정 받고 싶은데 가능한가요?",
    "요금, 객실",
    "국내숙박, 펜션"
  ),
  createData(
    "4",
    "탑승자가 변경되어 이름을 변경하고 싶은데 어떻게 해야하나요?",
    "변경, 취소",
    "국내항공권 "
  ),
  createData(
    "5",
    "취소는 어디에서 해야 하나요? 현장에서도 취소 가능한가요?",
    "변경, 취소",
    "국내숙박,펜션"
  ),
  createData(
    "6",
    "TripN닷컴에서 사용가능한 신용카드와 할부가능범위는?",
    "결제, 환불",
    "상품예약, 결제"
  ),
];

export default function FAQ(props) {
  const dispatch = useDispatch();
  const aaa = useSelector((state) => state.mypage.faqListState);
  useEffect(() => {
    dispatch(faqList());
  }, []);

  // const list = useSelector((state) => state.mypage.faqListState);
  // const type = useSelector((state) => state.mypage.type); // 자바의 레포지토리의 타입
  // const keyword = useSelector((state) => state.mypage.keyword); // 레포지토리의 키
  // const page = 1;

  // useEffect(() => {
  //   const param = { type: type, keyword: keyword, page: page };
  //   dispatch(faqList(param));
  //   console.log(param);
  // }, []);

  console.log(JSON.stringify());

  return (
    <>
      <MyLayout>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="center">번호</TableCell>
                <TableCell align="center">질문</TableCell>
                <TableCell align="center">카테고리</TableCell>
                <TableCell align="center">항목</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {users.map((i, userId) => (
                  <TableRow key={userId}>
                    <TableCell>{i.userId}</TableCell>
                    <TableCell>{i.name}</TableCell>
                    <TableCell>{i.userName}</TableCell>
                    <TableCell>{i.birth}</TableCell>
                  </TableRow>
                ))} */}
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack spacing={2}>
            <Pagination count={10} />
          </Stack>
          <br />
          <div flexDirection>
            <input type="text" class="han" />
            <button>검색</button>
          </div>
        </Box>
      </MyLayout>
    </>
  );
}
