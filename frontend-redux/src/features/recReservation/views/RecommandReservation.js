import * as React from "react";
import { TripLayout } from "features/common";
import {
  Button,
  Typography,
  Container,
  Box,
  Paper,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import styles from "features/recReservation/styles/RecReservation.module.scss";
import { VoucherTab } from "features/totalValue";

export function RecommandReservation() {
  return (
    <>
      <br />
      <br />
      <TripLayout>
        <VoucherTab />
        <div>
          <h1> Travel Plan </h1>
          <Box component={Paper} sx={{ width: "100%", typography: "body1" }}>
            <Accordion sx={{ minWidth: 700 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>DAY 1</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.accor_container}>
                  <div className={styles.activity}>
                    <h4>추천 체험</h4>
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: "cover",
                        backgroundPosition: "center 40%",
                        // backgroundImage: `url(${image.url})`,
                        // marginTop: '-30px'
                      }}
                    />
                    이름 : <br />
                    영업시간 : {}-{} <br />
                    체험시간 : <br />
                    전화번호 : <br />
                    주소 : <br />
                    금액 : {}₩ <br />
                  </div>

                  <div className={styles.restaurant}>
                    <div>
                      <h4>추천 식당 1</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      이름 : <br />
                      주소 : <br />
                      추천 카테고리 : <br />
                    </div>
                    <div>
                      <h4>추천 식당 2</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      이름 : <br />
                      주소 : <br />
                      추천 카테고리 :
                    </div>
                  </div>

                  <div className={styles.tourist}>
                    <div>
                      <h4>추천 관광지 1</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      이름 : <br />
                      주소 : <br />
                      설명 : <br />
                    </div>
                    <div>
                      <h4>추천 관광지 2</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      이름 : <br />
                      주소 : <br />
                      설명 : <br />
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>DAY 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  2일차에 대한 여행 일정 ! 제주도에서 먹는 전복복복
                  <br />
                  우도 관광광광광광광우럭따
                  <br />
                  저녁은 흑돼지댜댜댜
                  <br />
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion> */}
          </Box>
        </div>
        <Container
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 9,
          }}
        >
          <Button
            component={Link}
            to="/invoice"
            sx={{
              border: "4px solid currentColor",
              borderRadius: 0,
              height: "auto",
              py: 2,
              px: 5,
            }}
          >
            <Typography variant="h4" component="span">
              결제하기
            </Typography>
          </Button>
          <Typography variant="subtitle1" sx={{ my: 3 }}>
            버튼을 누르시면 결제창으로 이동합니다.
          </Typography>
        </Container>
      </TripLayout>
    </>
  );
}
