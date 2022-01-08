import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mypageAPI } from "..";

const UPLOADIMG = async (x) => {
  console.log("값이 가고있어용")
  const res = await mypageAPI.uploadIMG(x);
  console.log("값이 오고있어용")
  return res.data;
};
const FAQLIST = async () => {
  console.log("33333333333")
  const res = await mypageAPI.faqList();
  console.log("444444444")
  return res.data;
};

export const uploadIMG = createAsyncThunk("mypage/picture", UPLOADIMG);
export const faqList = createAsyncThunk("mypage/faqList", FAQLIST );
// console.log("값이 111111")


const mypageSlice = createSlice({
  name: "mypage",
  initialState: {
    imgState: {
        formData: {},
    },
    faqListState:[],
    type: "",
    keyword: "",
    params: {},
  },
  reducers: {},
  extraReducers: {
    [uploadIMG.fulfilled]: (state, action) => {
      state.imgState = action.payload;
    },
    [faqList.fulfilled]: (state, { meta, payload }) => {
      console.log("값이 222222222")
      state.faqListState = payload;
    },
  },
});

export const currentImgState = (state) => state.mypage.imgState;
export const currentFaqListState = (state) => state.mypage.faqListState;
export const currentFaqListParam = (state) => state.mypage.param;

export default mypageSlice.reducer;
