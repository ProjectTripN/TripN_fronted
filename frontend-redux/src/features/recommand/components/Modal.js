import React, { useState } from "react";
import { Transition } from "react-transition-group";
import Backdrop from "./BackDrop";
import ModalForm from "./ModalForm";
import "features/recommand/styles/Setting.scss";
import { TextField } from "@mui/material";

export default function Modal() {
  const sessionUser = JSON.parse(window.localStorage.getItem("sessionUser"));
  const [goHome, setGoHome] = useState(false);

  return (
    <>
      <div className="App">
        <h1>{sessionUser.username}님 의 설정화면</h1>
        <Transition unmountOnExit in={goHome} timeout={5}>
          <ModalForm show={goHome} closed={() => setGoHome(false)} />
        </Transition>
        {goHome ? <Backdrop show={goHome} /> : null}
        <form>
        <button className="btn6" onClick={() => setGoHome(true)}>
          상품 1
        </button>
        <button className="btn6" onClick={() => setGoHome(true)}>
          상품 2
        </button>
        <button className="btn6" onClick={() => setGoHome(true)}>
          상품 3
        </button>
        <div type="button">ddd</div>
        <TextField
              fullWidth
              type="button"
              label="이메일"
              name="email"
              // value={email}
              // onChange={handleChange}
            />
        </form>
      </div>
    </>
  );
}
