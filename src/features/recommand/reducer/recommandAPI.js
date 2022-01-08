import axios from "axios";
// const SERVER = 'http://127.0.0.1:8000/api/'
// const SERVER = "http://192.168.0.35:8000/api/";
// const SERVER = "http://192.168.0.106:8000/api/";
const SERVERJEJU = "http://192.168.0.2:8001/api/"; //학원
const SERVERADMIN = "http://192.168.0.4:8000/api/";

const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege..",
};

const recommandList = (x) =>
  axios.post(`${SERVERJEJU}jeju/days`, JSON.stringify(x), { headers });
const recommandSave = (x) =>
  axios.post(`${SERVERJEJU}jeju/save_days`, JSON.stringify(x), { headers });
// const myReservation = (x) =>
//   axios.get(`${SERVERJEJU}jeju/pr_days/${x["user"]}`);

// const myReservation = () =>
// axios.get(`${SERVERJEJU}jeju/pr_days/${localStorage.getItem("userId")}`, JSON.stringify(), { headers });

//JH
const payment = (x) =>
  axios.post(`${SERVERADMIN}price/invoice`, JSON.stringify(x), { headers });

export default {
  recommandList,
  recommandSave,
  payment,
  // myReservation,
};
