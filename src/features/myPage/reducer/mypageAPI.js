import axios from "axios";

const SERVER = "http://localhost:8080";

const headers = {
  "Content-type": "application/json",
  Authorization: "JWT fefege..", // 일종의 토큰 블라블라로 바꿔준다
};

// const uploadIMG = (x) =>
//   axios.post(`${SERVER}/주소를 넣어줘야행 `, JSON.stringify(x), { headers });
const faqList = () =>
  axios.get(`${SERVER}/boards/list`);

export default {
  // uploadIMG,
  faqList,
};
