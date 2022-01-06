import { Box, Grid, Divider, Typography } from "@mui/material";
import { MyLayout } from "features/common";
import { myReservation } from "features/recommand/reducer/recommandSlice";

import * as React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import { TripLayout } from "features/common";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Paper,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "features/recReservation/styles/RecReservation.module.scss";
import { recommandSave } from "features/recommand/reducer/recommandSlice";

export default function MyPage() {
  const [map, setMap] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <MyLayout>
        <Box sx={{ width: "100vh", height: "auto" }}>
          <Grid>
            <Typography color="textPrimary" gutterBottom variant="h3" align="">
              다가오는 여행
            </Typography>
            <Divider sx={{ my: 3 }} />

            <Typography color="textPrimary" gutterBottom variant="h5" align="">
              2022. 01. 07 여행이 시작됩니다 :)
              <Divider sx={{ my: 3 }} />
            </Typography>
           
     

      {/* --------------------------------------------------------------------------- */}
      <div alignItems={"center"}>
        <h1> Travel Plan </h1>
        <Box component={Paper} sx={{ maxWidth: 1500, typography: "body1" }}>
          <Accordion sx={{ minWidth: 700, maxWidth: 1570 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">비행편</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <div>
                <div className={styles.box}>
                  <Typography variant="h6">출발편</Typography>
                  비행편명 : JJA-103
                  <br />
                  비행시간 : 07:00:00 - 08:10:00 <br />
                  요금 : ₩ 77,000
                  <br />
                  예약 : 4 좌석 <br />
                </div>
                <Divider />
                <div className={styles.box}>
                  <Typography variant="h6">도착편</Typography>
                  비행편명: KAL-1266
                  <br />
                  비행시간: 19:15:00 - 20:25:00
                  <br />
                  요금: ₩ 97,900
                  <br />
                  예약 : 4 좌석
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ minWidth: 700 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">숙소</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <div className={styles.activity}>
                <div className={styles.box}>
                  <img
                    width={"500vh"}
                    height={"400vh"}
                    src={`${"https://pix8.agoda.net/hotelImages/642/6428427/6428427_19010909220071168711.jpg"}?w=161&fit=crop&auto=format`}
                    loading="lazy"
                  />
                </div>
                <div className={styles.box}>
                  <br />
                  이름 : 제주 크리스마스풀빌라리조트
                  <br />
                  주소 : 제주시 구좌읍 해맞이해안로 2030-8
                  <br />
                  2인실 박당가격 : 67,666 ₩/박 <br />
                  예약 : 2박 , 4인
                  <br />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Box>
        <br />
        {/* ----------------------------------------------------------------------------------------------------------------------------- */}
        <Box component={Paper} sx={{ maxWidth: 1550, typography: "body1" }}>
          <Accordion sx={{ minWidth: 700, maxWidth: 1570 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">DAY 1</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <div className={styles.accor_container}>
                <div className={styles.mapBox}>
                  <Map
                    center={{
                      lat: 33.5090742304835,
                      lng: 126.899587749224,
                    }}
                    style={{
                      width: "1000px",
                      height: "600px",
                    }}
                    level={8}
                    onCreate={setMap}
                  >
                    <MapMarker
                      position={{
                        lat: 33.5090742304835,
                        lng: 126.899587749224,
                      }}
                      // title='현재 위치'
                      image={{
                        src:
                          "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                        size: {
                          width: 45,
                          height: 45,
                        },
                        options: {
                          offset: {
                            x: 25,
                            y: 45,
                          },
                        },
                      }}
                      onClick={(marker) => map.panTo(marker.getPosition())}
                      onMouseOver={() => setIsOpen(true)}
                      onMouseOut={() => setIsOpen(false)}
                    >
                      {isOpen && (
                        <div style={{ padding: "5px", color: "#000" }}>
                          제주 크리스마스풀빌라리조트
                        </div>
                      )}
                    </MapMarker>
                    <MapMarker
                      position={{
                        lat: 33.4968098822254,
                        lng: 126.910383176281,
                      }}
                      image={{
                        src:
                          "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                        size: {
                          width: 45,
                          height: 45,
                        },
                        options: {
                          offset: {
                            x: 25,
                            y: 45,
                          },
                        },
                      }}
                      onClick={(marker) => map.panTo(marker.getPosition())}
                      onMouseOver={() => setIsOpen(true)}
                      onMouseOut={() => setIsOpen(false)}
                    >
                      {isOpen && (
                        <div style={{ padding: "5px", color: "#000" }}>
                          해월정
                        </div>
                      )}
                    </MapMarker>
                    <MapMarker
                      position={{
                        lat: 33.5233717133389,
                        lng: 126.862239713197,
                      }}
                      image={{
                        src:
                          "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                        size: {
                          width: 45,
                          height: 45,
                        },
                        options: {
                          offset: {
                            x: 25,
                            y: 45,
                          },
                        },
                      }}
                      onClick={(marker) => map.panTo(marker.getPosition())}
                      onMouseOver={() => setIsOpen(true)}
                      onMouseOut={() => setIsOpen(false)}
                    >
                      {isOpen && (
                        <div style={{ padding: "5px", color: "#000" }}>
                          세화해수욕장
                        </div>
                      )}
                    </MapMarker>
                    <MapMarker
                      position={{
                        lat: 33.5026665933324,
                        lng: 126.94374024047,
                      }}
                      image={{
                        src:
                          "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                        size: {
                          width: 45,
                          height: 45,
                        },
                        options: {
                          offset: {
                            x: 25,
                            y: 45,
                          },
                        },
                      }}
                      onClick={(marker) => map.panTo(marker.getPosition())}
                      onMouseOver={() => setIsOpen(true)}
                      onMouseOut={() => setIsOpen(false)}
                    >
                      {isOpen && (
                        <div style={{ padding: "5px", color: "#000" }}>
                          산호 해수욕장
                        </div>
                      )}
                    </MapMarker>
                    <MapMarker
                      position={{
                        lat: 33.494115033587,
                        lng: 126.900071398216,
                      }}
                      image={{
                        src:
                          "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                        size: {
                          width: 45,
                          height: 45,
                        },
                        options: {
                          offset: {
                            x: 25,
                            y: 45,
                          },
                        },
                      }}
                      onClick={(marker) => map.panTo(marker.getPosition())}
                      onMouseOver={() => setIsOpen(true)}
                      onMouseOut={() => setIsOpen(false)}
                    >
                      {isOpen && (
                        <div style={{ padding: "5px", color: "#000" }}>
                          도예시선
                        </div>
                      )}
                    </MapMarker>
                  </Map>
                </div>

                <div className={styles.box}>
                  <div className={styles.restaurant}>
                    <div className={styles.box}>
                      <Typography variant="h6">추천 식당 1</Typography>
                      {/* <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`0day-${acc["name"]}`][2]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />

<img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`0day-${acc["name"]}`][0]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      /> */}

                      <div>
                        이름 : 해월정
                        <br />
                        주소 : 제주시 구좌읍 해맞이해안로 2284
                        <br />
                        추천 메뉴 : 물회, 보말죽
                        <br />
                      </div>
                    </div>
                    <div className={styles.box}>
                      <Typography variant="h6">추천 식당 2</Typography>
                      이름 : 육고기집
                      <br />
                      주소 : 제주시 한림읍 한림중앙로 34
                      <br />
                      추천 메뉴 :돼지구이
                    </div>
                  </div>
                </div>

                <div className={styles.tourist}>
                  <div className={styles.imageBox}>
                    <Typography variant="h6">추천 관광지 1</Typography>
                    <img
                      width={"500vh"}
                      height={"400vh"}
                      src={`${"https://api.cdn.visitjeju.net/photomng/imgpath/202110/21/a046c4ee-8fa6-4250-8947-c969713d5a07.JPG"}?w=161&fit=crop&auto=format`}
                      loading="lazy"
                    />
                    <br />
                    이름 : 세화해수욕장
                    <br />
                    주소 : 제주시 구좌읍 해녀박물관길 27
                    <br />
                    설명 : 제주의 많은 해변 중에서도 작은 세화해변이 널리 알려진
                    것은 벨롱장과 세화민속오일장 덕분이다. 동부지역에서 가장
                    규모가 큰 오일장이자 바닷가 바로 옆에서 열리는 이 오일장엔
                    매 5일마다 도민들의 삶을 엿볼 수 있는 풍경이 펼쳐진다. 제주
                    프리마켓의 원조인 벨롱장도 끊임없이 관광객을 유혹하고 있다.
                    최근에는 의자에 앉아 예쁜 바다를 배경으로 인생사진을 남길 수
                    있는 곳으로 많은 사랑을 받고 있다.
                    <br />
                  </div>
                  <div className={styles.imageBox}>
                    <Typography variant="h6">추천 관광지 2</Typography>
                    <img
                      width={"500vh"}
                      height={"400vh"}
                      src={`${"https://api.cdn.visitjeju.net/photomng/imgpath/202110/21/cebd9b74-fd3f-432e-8bce-489b86eec5c5.JPG"}?w=161&fit=crop&auto=format`}
                      loading="lazy"
                    />
                    <br />
                    이름 : 산호해수욕장
                    <br />
                    주소 : 제주시 우도면 우도해안길 252
                    <br />
                    설명 : 에메랄드빛으로 부서지는 햇살 아래 하얗다 못해
                    푸른빛이 감도는 서빈백사해변. 우도 서쪽의 하얀모래해변이라
                    하여 서빈백사로 불린다. 이곳의 모래는 해양 조류 중 하나인
                    홍조가 해안으로 쓸려와 퇴적된 것으로, 홍조단괴
                    산호해변으로도 불린다. 수심에 따라 바다 빛깔이 달라
                    남태평양이나 지중해의 어느 바다와 비교해도 손색이 없다.
                    <br />
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          {/* ---------------------------------------------------------------------------------------------------- */}
          <Accordion sx={{ minWidth: 700, maxWidth: 1570 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">DAY 2</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <div className={styles.accor_container}>
                <div className={styles.mapBox}>
                  <Map
                    center={{
                      lat: 33.4661335378649,
                      lng: 126.321591095516,
                    }}
                    style={{
                      width: "1000px",
                      height: "600px",
                    }}
                    level={8}
                    onCreate={setMap}
                  >
                    <MapMarker
                      position={{
                        lat: 33.4661335378649,
                        lng: 126.321591095516,
                      }}
                      // title='현재 위치'
                      image={{
                        // 무료 마커이미지의 주소: https://www.flaticon.com/kr/
                        // src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693914.png?token=exp=1637741898~hmac=fada3fe37d0197cf397c5d7713400e95",
                        src:
                          "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                        size: {
                          width: 45,
                          height: 45,
                        },
                        options: {
                          offset: {
                            x: 25,
                            y: 45,
                          },
                        },
                      }}
                      onClick={(marker) => map.panTo(marker.getPosition())}
                      onMouseOver={() => setIsOpen(true)}
                      onMouseOut={() => setIsOpen(false)}
                    >
                      {isOpen && (
                        <div style={{ padding: "5px", color: "#000" }}>
                          애월스쿠버
                        </div>
                      )}
                    </MapMarker>
                  </Map>
                </div>
                <Typography variant="h6">추천 체험</Typography>
                {/* <div className={styles.activity}>
                    <div className={styles.box}>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[0]}`][0]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.box}>
                      이름 : {plan[`day-${activity[0]}`][0]["name"]}
                      <br />
                      영업시간 :{" "}
                      {
                        plan[`day-${activity[0]}`][0]["start_business_time"]
                      } - {plan[`day-${activity[0]}`][0]["end_business_time"]}{" "}
                      <br />
                      체험시간 : {plan[`day-${activity[0]}`][0]["time"]}
                      <br />
                      주소 : {plan[`day-${activity[0]}`][0]["loc"]}
                      <br />
                      금액 : ₩{" "}
                      {plan[`day-${activity[0]}`][0]["price"]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      / 인당
                    </div>
                    <br />
                  </div> */}

                {/* <div className={styles.box}>
                    <div className={styles.restaurant}>
                      <div className={styles.box}>
                        <Typography variant="h6">추천 식당 1</Typography>

                        <div>
                          이름 : {plan[`day-${activity[0]}`][1]["name"]}
                          <br />
                          주소 : {plan[`day-${activity[0]}`][1]["loc"]}
                          <br />
                          추천 메뉴 :{" "}
                          {plan[`day-${activity[0]}`][1]["recommend"]}
                          <br />
                        </div>
                      </div>
                      <div className={styles.box}>
                        <Typography variant="h6">추천 식당 2</Typography>
                        이름 : {plan[`day-${activity[0]}`][2]["name"]}
                        <br />
                        주소 : {plan[`day-${activity[0]}`][2]["loc"]}
                        <br />
                        추천 메뉴 : {plan[`day-${activity[0]}`][2]["recommend"]}
                      </div>
                    </div>
                  </div> */}

                {/* <div className={styles.tourist}>
                    <div className={styles.imageBox}>
                      <Typography variant="h6">추천 관광지 1</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[0]}`][3]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`day-${activity[0]}`][3]["name"]}
                      <br />
                      주소 : {plan[`day-${activity[0]}`][3]["address"]}
                      <br />
                      설명 : {plan[`day-${activity[0]}`][3]["explanation"]}
                      <br />
                    </div>
                    <div className={styles.imageBox}>
                      <Typography variant="h6">추천 관광지 2</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[0]}`][4]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`day-${activity[0]}`][4]["name"]}
                      <br />
                      주소 : {plan[`day-${activity[0]}`][4]["address"]}
                      <br />
                      설명 : {plan[`day-${activity[0]}`][4]["explanation"]}
                      <br />
                    </div>
                  </div> */}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* --------------------------------------------------------------------- */}
          <Accordion sx={{ minWidth: 700, maxWidth: 1570 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">DAY 3</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              몰라 몰라 난 정말몰라
              {/* <div className={styles.accor_container}>
                  <div className={styles.mapBox}>
                    <Map
                      center={{
                        lat: plan[`day-${activity[1]}`][0]["lat"],
                        lng: plan[`day-${activity[1]}`][0]["log"],
                      }}
                      style={{
                        width: "1000px",
                        height: "600px",
                      }}
                      level={8}
                      onCreate={setMap}
                    >
                      <MapMarker
                        position={{
                          lat: plan[`day-${activity[1]}`][0]["lat"],
                          lng: plan[`day-${activity[1]}`][0]["log"],
                        }}
                        image={{
                          src:
                            "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                          size: {
                            width: 45,
                            height: 45,
                          },
                          options: {
                            offset: {
                              x: 25,
                              y: 45,
                            },
                          },
                        }}
                        onClick={(marker) => map.panTo(marker.getPosition())}
                        onMouseOver={() => setIsOpen(true)}
                        onMouseOut={() => setIsOpen(false)}
                      >
                        {isOpen && (
                          <div style={{ padding: "5px", color: "#000" }}>
                            {plan[`day-${activity[1]}`][0]["name"]}
                          </div>
                        )}
                      </MapMarker>
                      {points2.map((value) => (
                        <EventMarkerContainer
                          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                          position={value.latlng}
                          content={value.content}
                        />
                      ))}
                    </Map>
                  </div>
                  {/* ----------------------------------------------------------------- */}
              <Typography variant="h6">추천 체험</Typography>
              <div className={styles.activity}>
                {/* <div className={styles.box}>
                  <img
                    width={"500vh"}
                    height={"400vh"}
                    src={`${
                      plan[`day-${activity[1]}`][0]["url"]
                    }?w=161&fit=crop&auto=format`}
                    loading="lazy"
                  />
                </div> */}
                {/* <div className={styles.box}>
                  이름 : {plan[`day-${activity[1]}`][0]["name"]}
                  <br />
                  영업시간 :{" "}
                  {plan[`day-${activity[1]}`][0]["start_business_time"]} -{" "}
                  {plan[`day-${activity[1]}`][0]["end_business_time"]} <br />
                  체험시간 : {plan[`day-${activity[1]}`][0]["time"]}
                  <br />
                  주소 : {plan[`day-${activity[1]}`][0]["loc"]}
                  <br />
                  금액 : ₩{" "}
                  {plan[`day-${activity[1]}`][0]["price"]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  / 인당
                </div> */}
                <br />
              </div>
              <div className={styles.box}>
                <div className={styles.restaurant}>
                  <div className={styles.box}>
                    <Typography variant="h6">추천 식당 1</Typography>
                    {/* <div>
                      이름 : {plan[`day-${activity[1]}`][1]["name"]}
                      <br />
                      주소 : {plan[`day-${activity[1]}`][1]["loc"]}
                      <br />
                      추천 메뉴 : {plan[`day-${activity[1]}`][1]["recommend"]}
                      <br />
                    </div> */}
                  </div>
                  <div className={styles.box}>
                    {/* <Typography variant="h6">추천 식당 2</Typography>
                        이름 : {plan[`day-${activity[1]}`][2]["name"]}
                        <br />
                        주소 : {plan[`day-${activity[1]}`][2]["loc"]}
                        <br />
                        추천 메뉴 : {plan[`day-${activity[1]}`][2]["recommend"]}
                      </div>
                    </div>
                  </div>

                  <div className={styles.tourist}>
                    <div className={styles.imageBox}> */}
                  </div>
                  {/* <Typography variant="h6">추천 관광지 1</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[1]}`][3]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`day-${activity[1]}`][3]["name"]}
                      <br />
                      주소 : {plan[`day-${activity[1]}`][3]["address"]}
                      <br />
                      설명 : {plan[`day-${activity[1]}`][3]["explanation"]}
                      <br /> */}
                </div>
                <div className={styles.imageBox}>
                  {/* <Typography variant="h6">추천 관광지 2</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[1]}`][4]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`day-${activity[1]}`][4]["name"]}
                      <br />
                      주소 : {plan[`day-${activity[1]}`][4]["address"]}
                      <br />
                      설명 : {plan[`day-${activity[1]}`][4]["explanation"]}
                      <br />
                    </div> */}
                </div>
              </div>
              {/* </div>  */}
            </AccordionDetails>
          </Accordion>
        </Box>
        <br />
        <br />
        <div align={"center"}>
          <Button
            onClick={() => {
              navigate("/invoice");
            }}
            sx={{
              border: "4px solid currentColor",
              borderRadius: 0,
              alignItems: "center",
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
        </div>
      </div>

      </Grid>
        </Box>
      </MyLayout>
    </>
  );
}
