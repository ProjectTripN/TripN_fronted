import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCategories } from "..";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { Button, Box } from "@mui/material";
// import { positions } from "@mui/system";
import { tour } from "features/chatbot/reducer/chatSlice";
import "features/recommand/styles/Product.scss";

export default function Product() {
  // ---------------------------------------- 토오통토토통
  const [depAirplane, setDepAirplane] = useState("");
  const [arrAirplane, setArrAirplane] = useState("");
  const [accomodation, setAccomodation] = useState("");

  const [activity, setActivity] = useState();
  const [activity2, setActivity2] = useState();
  const [olle, setOlle] = useState("");

  const a = {
    plane: [depAirplane, arrAirplane],
    accomodation: accomodation,
    activity: [activity, activity2],
    olle: olle,
  };

  console.log(a);


  return (
    <>
      <div align="center">
        <h1>Departure Flight</h1>
        <div name="tourist">
          <Button
            onClick={(() => setDepAirplane("1"))}
          >
            <div >
            비행편: <br/>
            비행시간:{}-{} <br/>
            금액: <br/>
            요금: <br/>
            </div>
          </Button>
          <Button
            onClick={(() => setDepAirplane("2"))}
          >
            <div >
            비행편: <br/>
            비행시간:{}-{} <br/>
            금액: <br/>
            요금: <br/>
            </div>
          </Button>
        
          <Button
            onClick={(() => setDepAirplane("3"))}
          >
            <div >
            비행편: <br/>
            비행시간:{}-{} <br/>
            금액: <br/>
            요금: <br/>
            </div>
          </Button>
          <br/>출발 비행편 {} 이 선택되었습니다 
        
        </div>
        <h1>Arrival Flight</h1>
        <div name="tourist">
          <Button onClick={() => setArrAirplane("1")}>
          <div >
            비행편: <br/>
            비행시간:{}-{} <br/>
            금액: <br/>
            요금: <br/>
            </div>
          </Button>
          <Button onClick={() => setArrAirplane("2")}>
          <div >
            비행편: <br/>
            비행시간:{}-{} <br/>
            금액: <br/>
            요금: <br/>
            </div>
          </Button>
          <Button onClick={() => setArrAirplane("3")}>
          <div >
            비행편: <br/>
            비행시간:{}-{} <br/>
            금액: <br/>
            요금: <br/>
            </div>
          </Button>
          <br/>도착 비행편 {} 이 선택되었습니다 
        </div>
        <h1>Accomodation</h1>
        <div name="tourist">
          <Button onClick={() => setAccomodation("1")}>
          <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url()`,
                // marginTop: '-30px'
              }}/>
            이름 : <br/>
            주소 : <br/>
            박당가격 : {}₩/박 <br/>
            전화번호 : <br/>
          </Button>
          <Button onClick={() => setAccomodation("2")}>
            이름 : <br/>
            주소 : <br/>
            박당가격 : {}₩/박<br/>
            전화번호 : <br/>
          </Button>
          <Button onClick={() => setAccomodation("3")}>
            이름 : <br/>
            주소 : <br/>
            박당가격 : {}₩/박<br/>
            전화번호 : <br/>
          </Button>
          <br/>숙소 {} 이 선택되었습니다 
        
        </div>
        <h1>Activity</h1>
        <div name="tourist">
          <Button onClick={() => setActivity("1")}>
            이름 : <br/>
            영업시간 : {}-{}<br/>
            체험시간 : <br/>
            주소 :<br/>
            가격 : {}₩<br/>
          </Button>
          <Button onClick={() => setActivity("2")}>
            이름 : <br/>
            영업시간 : {}-{}<br/>
            체험시간 : <br/>
            주소 :<br/>
            가격 : {}₩<br/>
          </Button>
          <Button onClick={() => setActivity("3")}>
            이름 : <br/>
            영업시간 : {}-{}<br/>
            체험시간 : <br/>
            주소 :<br/>
            가격 : {}₩<br/>
          </Button>
          <Button onClick={() => setActivity2("3")}>
            이름 : <br/>
            영업시간 : {}-{}<br/>
            체험시간 : <br/>
            주소 :<br/>
            가격 : {}₩<br/>
          </Button>
          <Button onClick={() => setActivity2("3")}>
            이름 : <br/>
            영업시간 : {}-{}<br/>
            체험시간 : <br/>
            주소 :<br/>
            가격 : {}₩<br/>
          </Button>
          <br/>Activity {} 이 선택되었습다
          </div>
        <h1>olle</h1>
        <div name="olle">
          <Button onClick={() => setActivity("1")}>
            이름 : <br/>
            주소 :<br/>
          </Button>
      
      </div>
      <br/>Activity {}  선택되었습다
        </div>
       
    </>
  );
}
