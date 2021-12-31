import React from "react";
import { TripLayout } from "features/common";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Container from "@mui/material/Container";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "features/recommand/styles/Product.scss";
import { recommandList } from "../reducer/recommandSlice";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { margin } from "@mui/system";

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "30vh",
}));

export function Recommand() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recommand = useSelector((state) => state.chatSlice.dataState[0]);
  const day = recommand[0]["day"];
  const departure_plane = recommand[1];
  const dep_plane1 = departure_plane[0];
  const dep_plane2 = departure_plane[1];
  const dep_plane3 = departure_plane[2];
  const arrival_plane = recommand[2];
  const ar_plane1 = arrival_plane[0];
  const ar_plane2 = arrival_plane[1];
  const ar_plane3 = arrival_plane[2];
  const accommodation_sever = recommand[3];
  const acc_1 = accommodation_sever[0];
  const acc_2 = accommodation_sever[1];
  const acc_3 = accommodation_sever[2];
  const activity_sever = recommand[4];
  const act_1 = activity_sever[0];
  const act_2 = activity_sever[1];
  const act_3 = activity_sever[2];
  const act_4 = activity_sever[3];
  const act_5 = activity_sever[4];
  // const olle_sever = recommand[5]
  // const olle = recommand[5]
  console.log(`departure_plane==========${JSON.stringify(departure_plane[0])}`);
  console.log(`day==========${JSON.stringify(day)}`);
  console.log("도착비행기" + JSON.stringify(departure_plane));
  // console.log(`olle_sever  ==== ${JSON.stringify(olle_sever[1])}`)
  // ---------------------------------------- 토오통토토통
  const [depAirplane, setDepAirplane] = useState("");
  const [arrAirplane, setArrAirplane] = useState("");
  const [accomodation, setAccomodation] = useState("");

  const [activity1, setActivity1] = useState("");
  const [activity2, setActivity2] = useState("");
  //   const [olle, setOlle] = useState("");

  const result = {
    depAirplane: depAirplane["id"],
    arrAirplane: arrAirplane["id"],
    accomodation: accomodation["id"],
    activity1: activity1["id"],
    activity2: activity2["id"],
    //  olle: [olle['id']],
  };

 
  const accomImages = [
    {
      url:
      `${JSON.stringify(acc_1["url"])}`,
      title: "Snorkeling",
      width: "30%",
    },

    {
      url:
      `${JSON.stringify(acc_2["url"])}`,
      title: "Tour",
      width: "30%",
    },

    {
      url:
      `${JSON.stringify(acc_3["url"])}`,
      title: "Reading",
      width: "30%",
    },
  ];

  const activity1Images = [
    {
      url:
      `${JSON.stringify(act_1["url"])}`,
      title: "Snorkeling",
      width: "30%",
    },

    {
      url:
      `${JSON.stringify(act_2["url"])}`,
      title: "Tour",
      width: "30%",
    },

    {
      url:
      `${JSON.stringify(act_3["url"])}`,
      title: "Reading",
      width: "30%",
    },
  ];
  const activity2Images = [
    {
      url: `${JSON.stringify(act_4["url"])}`,
      title: "Snorkeling",
      width: "30%",
    },
    {
      url:
      `${JSON.stringify(act_5["url"])}`,
      title: "Tour",
      width: "30%",
    },
  ];

  console.log(result);
  console.log(`acc localStorage :::::::::: ${localStorage.getItem("acc")}`);
  console.log("img localStorage ::::::::::" + JSON.stringify(acc_1["url"]));

  return (
    <TripLayout>
      <div align="center">
        <h1>Departure Flight</h1>
        <div name="departure_plane">
          <div className="a">
            <Button
              sx={{ width: "45vh" }}
              onClick={() => setDepAirplane(dep_plane1)}
            >
              <div className="airButton">
                비행편: {JSON.parse(JSON.stringify(dep_plane1["vihicleId"]))}
                <br />
                비행시간:{" "}
                {JSON.parse(JSON.stringify(dep_plane1["depPlandTime"]))} -{" "}
                {JSON.parse(JSON.stringify(dep_plane1["arrPlandTime"]))} <br />
                요금: {JSON.parse(JSON.stringify(dep_plane1["economyCharge"]))}
                <br />
              </div>
            </Button>
            <Button
              sx={{ width: "45vh" }}
              onClick={() => setDepAirplane(dep_plane2)}
            >
              <div className="airButton">
                비행편: {JSON.parse(JSON.stringify(dep_plane2["vihicleId"]))}
                <br />
                비행시간:{" "}
                {JSON.parse(JSON.stringify(dep_plane2["depPlandTime"]))} -{" "}
                {JSON.parse(JSON.stringify(dep_plane2["arrPlandTime"]))} <br />
                요금: {JSON.parse(JSON.stringify(dep_plane2["economyCharge"]))}
                <br />
              </div>
            </Button>
            <Button
              sx={{ width: "45vh" }}
              onClick={() => setDepAirplane(dep_plane3)}
            >
              <div className="airButton">
                비행편: {JSON.parse(JSON.stringify(dep_plane3["vihicleId"]))}
                <br />
                비행시간:{" "}
                {JSON.parse(JSON.stringify(dep_plane3["depPlandTime"]))} -{" "}
                {JSON.parse(JSON.stringify(dep_plane3["arrPlandTime"]))} <br />
                요금: {JSON.parse(JSON.stringify(dep_plane3["economyCharge"]))}
                <br />
              </div>
            </Button>
          </div>
          <br />
          출발 비행편 {depAirplane["vihicleId"]} 이 선택되었습니다
        </div>
        <h1>Arrival Flight</h1>
        <div name="departure_plane">
          <Button
            sx={{ width: "45vh" }}
            onClick={() => setArrAirplane(ar_plane1)}
          >
            <div className="airButton">
              비행편: {JSON.parse(JSON.stringify(ar_plane1["vihicleId"]))}
              <br />
              비행시간: {JSON.parse(
                JSON.stringify(ar_plane1["depPlandTime"])
              )}{" "}
              - {JSON.parse(JSON.stringify(ar_plane1["arrPlandTime"]))} <br />
              요금: {JSON.parse(JSON.stringify(ar_plane1["economyCharge"]))}
              <br />
            </div>
          </Button>
          <Button
            sx={{ width: "45vh" }}
            onClick={() => setArrAirplane(ar_plane2)}
          >
            <div className="airButton">
              비행편: {JSON.parse(JSON.stringify(ar_plane2["vihicleId"]))}
              <br />
              비행시간: {JSON.parse(
                JSON.stringify(ar_plane2["depPlandTime"])
              )}{" "}
              - {JSON.parse(JSON.stringify(ar_plane2["arrPlandTime"]))} <br />
              요금: {JSON.parse(JSON.stringify(ar_plane2["economyCharge"]))}
              <br />
            </div>
          </Button>
          <Button
            sx={{ width: "45vh" }}
            onClick={() => setArrAirplane(ar_plane3)}
          >
            <div className="airButton">
              비행편: {JSON.parse(JSON.stringify(ar_plane3["vihicleId"]))}
              <br />
              비행시간: {JSON.parse(
                JSON.stringify(ar_plane3["depPlandTime"])
              )}{" "}
              - {JSON.parse(JSON.stringify(ar_plane3["arrPlandTime"]))} <br />
              요금: {JSON.parse(JSON.stringify(ar_plane3["economyCharge"]))}
              <br />
            </div>
          </Button>
          <br />
          도착 비행편 {arrAirplane["vihicleId"]} 이 선택되었습니다
          {window.localStorage.setItem("depplane", result.depAirplane)}
          {window.localStorage.setItem("arrplane", result.arrAirplane)}
        </div>
        <h1>Accomodation</h1>
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {accomImages.map((image) => (
            <ImageIconButton
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: "10vh",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${image.url})`,
                }}
              />
            </ImageIconButton>
          ))}
        </Box>
        <div name="tourist">
          <Button
            sx={{ width: "30vh", marginRight: "10vh" }}
            onClick={() => setAccomodation(acc_1)}
            className="accmoButton"
          >
            이름 : {JSON.parse(JSON.stringify(acc_1["name"]))}
            <br />
            주소 : {JSON.parse(JSON.stringify(acc_1["loc"]))}
            <br />
            박당가격 : {JSON.parse(JSON.stringify(acc_1["price"]))} ₩/박 <br />
          </Button>
          <Button
            sx={{ width: "30vh", marginRight: "10vh" }}
            onClick={() => setAccomodation(acc_2)}
            className="accmoButton"
          >
            이름 : {JSON.parse(JSON.stringify(acc_2["name"]))}
            <br />
            주소 : {JSON.parse(JSON.stringify(acc_2["loc"]))}
            <br />
            박당가격 : {JSON.parse(JSON.stringify(acc_2["price"]))} ₩/박 <br />
          </Button>
          <Button
            sx={{ width: "25vh", marginRight: "10vh" }}
            onClick={() => setAccomodation(acc_3)}
            className="accmoButton"
          >
            이름 : {JSON.parse(JSON.stringify(acc_3["name"]))}
            <br />
            주소 : {JSON.parse(JSON.stringify(acc_3["loc"]))}
            <br />
            박당가격 : {JSON.parse(JSON.stringify(acc_3["price"]))} ₩/박 <br />
          </Button>
          <br /> {accomodation["name"]}이(가) 선택되었습니다
          {window.localStorage.setItem("acc", result.accomodation)}
        </div>
        <br />
        <h1>Activity</h1>

        <div name="activity">
          Activity와 Olle를 여행 예정 날짜인 {day}일에 맞추어 선택해 주세요
          {window.localStorage.setItem("day", day)}
          <Box
            sx={{
              mt: 8,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {activity1Images.map((image) => (
              <ImageIconButton
                key={image.title}
                style={{
                  width: image.width,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: "10vh",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${image.url})`,
                  }}
                />
              </ImageIconButton>
            ))}
          </Box>
          <Button
            sx={{ width: "30vh", marginRight: "10vh" }}
            onClick={() => setActivity1(act_1)}
            className="activityButton"
          >
            이름 : {JSON.parse(JSON.stringify(act_1["name"]))}
            <br />
            영업시간 :{" "}
            {JSON.parse(JSON.stringify(act_1["start_business_time"]))} -{" "}
            {JSON.parse(JSON.stringify(act_1["end_business_time"]))}
            <br />
            체험시간 : {JSON.parse(JSON.stringify(act_1["time"]))}
            <br />
            주소 : {JSON.parse(JSON.stringify(act_1["loc"]))}
            <br />
            가격 : ₩{JSON.parse(JSON.stringify(act_1["price"]))}
            <br />
          </Button>
          <Button
            sx={{ width: "30vh", marginRight: "10vh" }}
            onClick={() => setActivity1(act_2)}
            className="activityButton"
          >
            이름 : {JSON.parse(JSON.stringify(act_2["name"]))}
            <br />
            영업시간 :{" "}
            {JSON.parse(JSON.stringify(act_2["start_business_time"]))} -{" "}
            {JSON.parse(JSON.stringify(act_2["end_business_time"]))}
            <br />
            체험시간 : {JSON.parse(JSON.stringify(act_2["time"]))}
            <br />
            주소 : {JSON.parse(JSON.stringify(act_2["loc"]))}
            <br />
            가격 : ₩{JSON.parse(JSON.stringify(act_2["price"]))}
            <br />
          </Button>
          <Button
            sx={{ width: "25vh", marginRight: "10vh" }}
            onClick={() => setActivity1(act_3)}
            className="activityButton"
          >
            이름 : {JSON.parse(JSON.stringify(act_3["name"]))}
            <br />
            영업시간 :{" "}
            {JSON.parse(JSON.stringify(act_3["start_business_time"]))} -{" "}
            {JSON.parse(JSON.stringify(act_3["end_business_time"]))}
            <br />
            체험시간 : {JSON.parse(JSON.stringify(act_3["time"]))}
            <br />
            주소 : {JSON.parse(JSON.stringify(act_3["loc"]))}
            <br />
            가격 : ₩{JSON.parse(JSON.stringify(act_3["price"]))}
            <br />
          </Button>
          <Box
            sx={{
              mt: 8,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {activity2Images.map((image) => (
              <ImageIconButton
                key={image.title}
                style={{
                  width: image.width,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: "10vh",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${image.url})`,
                  }}
                />
              </ImageIconButton>
            ))}
          </Box>
          <Button
            sx={{ width: "30vh", marginRight: "10vh" }}
            onClick={() => setActivity2(act_4)}
            className="activityButton"
          >
            이름 : {JSON.parse(JSON.stringify(act_4["name"]))}
            <br />
            영업시간 :{" "}
            {JSON.parse(JSON.stringify(act_4["start_business_time"]))} -{" "}
            {JSON.parse(JSON.stringify(act_4["end_business_time"]))}
            <br />
            체험시간 : {JSON.parse(JSON.stringify(act_4["time"]))}
            <br />
            주소 : {JSON.parse(JSON.stringify(act_4["loc"]))}
            <br />
            가격 : ₩{JSON.parse(JSON.stringify(act_4["price"]))}
            <br />
          </Button>
          <Button
            sx={{ width: "30vh", marginRight: "10vh" }}
            onClick={() => setActivity2(act_5)}
            className="activityButton"
          >
            이름 : {JSON.parse(JSON.stringify(act_5["name"]))}
            <br />
            영업시간 :{" "}
            {JSON.parse(JSON.stringify(act_5["start_business_time"]))} -{" "}
            {JSON.parse(JSON.stringify(act_5["end_business_time"]))}
            <br />
            체험시간 : {JSON.parse(JSON.stringify(act_5["time"]))}
            <br />
            주소 : {JSON.parse(JSON.stringify(act_5["loc"]))}
            <br />
            가격 : ₩{JSON.parse(JSON.stringify(act_5["price"]))}
            <br />
          </Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <br />
          Activity {activity1["name"]}과(와) {activity2["name"]} 이(가) 선택되었습니다
          {window.localStorage.setItem("activty1", result.activity1)}
          {window.localStorage.setItem("activty2", result.activity2)}
        </div>
        {/* <h1>olle</h1>
        <div name="olle">
          <Button onClick={() => setOlle(olle_sever[1][0])}>
            이름 : {JSON.stringify(olle_sever[1][0]['name'])}<br/>
            소개 : {JSON.stringify(olle_sever[1][0]['explanation'])}<br/>
          </Button>
      
      </div>
      <br/>olle {olle['name']}  선택되었습다 */}
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
        <button
          onClick={() => {
            dispatch(
              recommandList({
                date1: localStorage.getItem("start"),
                date2: localStorage.getItem("end"),
                start: localStorage.getItem("airstart"),
                Number: localStorage.getItem("number"),
                user: 5,
                mbti: "iiesnsfttppp",
                relationship: localStorage.getItem("relationship"),
                plane: [
                  localStorage.getItem("depplane"),
                  localStorage.getItem("arrplane"),
                ],
                acc: localStorage.getItem("acc"),
                activty: [
                  localStorage.getItem("activty1"),
                  localStorage.getItem("activty2"),
                ],
                olle: [],
              })
            );
          }}
        >
          저장
        </button>
        <Button
          sx={{ width: "45vh" }}
          onClick={() => {
            navigate("/rec/reservation");
          }}
          // {window.localStorage.setItem("plane", [a.depAirplane, a.arrAirplane]), window.localStorage.setItem("acc", a.accomodation), window.localStorage.setItem("activty", [a.activity1, a.activity2])}}
          // component={Link}
          // to="/rec/reservation"
          sx={{
            border: "4px solid currentColor",
            borderRadius: 0,
            height: "auto",
            py: 2,
            px: 5,
          }}
          //   onClick={()=>{dispatch(recommandList({
          //     "date1": localStorage.getItem("start"),
          //     "date2": localStorage.getItem("end"),
          //     "start": localStorage.getItem("airstart"),
          //     "Number": localStorage.getItem("number"),
          //     "user": 5,
          //     "mbti": "iiesnsfttppp",
          //     "relationship": localStorage.getItem("relationship"),
          //     "plane": [localStorage.getItem("depplane"), localStorage.getItem("arrplane")],
          //     "acc": localStorage.getItem("acc"),
          //     "activty": [localStorage.getItem("activty1"),localStorage.getItem("activty2")],
          //     "olle": []
          // }))}}
          // href="/rec/reservation"
        >
          <Typography variant="h4" component="span">
            여행 일정 확인하기
          </Typography>
        </Button>
        <Typography variant="subtitle1" sx={{ my: 3 }}>
          버튼을 누르시면 일정 페이지로 이동합니다.
        </Typography>
        {/* <Box
        component="img"
        src="/static/themes/onepirate/producBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      /> */}
      </Container>
    </TripLayout>
  );
}
