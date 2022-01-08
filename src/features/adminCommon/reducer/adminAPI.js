import axios from "axios";

const SERVER = "http://172.29.208.1:8000/api";
// const SERVER = "http://192.168.0.75:8000/api";
// const SERVER = "http://192.168.0.107:8000/api";
// const SERVER = "http://192.168.0.42:8000/api";
// const SERVER = "http://192.168.0.4:8000/api";

const headers = {
  "Content-type": "application/json",
  Authorization: "JWT fefege..", // 일종의 토큰 블라블라로 바꿔준다
};

//dashboard
const totalProfit = () => axios.get(`${SERVER}/ledger/profit`);
const lastSixMonth = () => axios.get(`${SERVER}/reservation/count`);
const yearchart = () => axios.get(`${SERVER}/fin_reports/show_fin`);
const salesItem = () => axios.get(`${SERVER}/reservation/month`);

//sales managements
const costSixmonth = () => axios.get(`${SERVER}/ledger/6month`);
const costDetails = () => axios.get(`${SERVER}/ledger/month_cost`);

// const join = (x) =>
//   axios.post(`${SERVER}/users/join`, JSON.stringify(x), { headers });
// const login = (x) =>
//   axios.post(`${SERVER}/users/login`, JSON.stringify(x), { headers });
//   const exist = x => axios.get(`${SERVER}/users/exist/${x}`)
//   const detail = x => axios.get(`${SERVER}/users/${x.userId}`)
//   const list = x => axios.get(`${SERVER}/users/list/${x}`)
//   const modify = x => axios.put(`${SERVER}/users`, JSON.stringify(x),{headers})
//   const remove = x => axios.delete(`${SERVER}/users/${x}`,JSON.stringify(x),{headers})

export default {
  totalProfit,
  lastSixMonth,
  yearchart,
  costSixmonth,
  salesItem,
  costDetails,
};
