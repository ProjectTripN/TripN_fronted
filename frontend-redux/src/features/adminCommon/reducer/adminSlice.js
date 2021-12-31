import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "..";

//Dashborard
const TOTALPROFIT = async () => {
  // console.log("값 들어간다11111");
  const res = await adminAPI.totalProfit();
  // console.log("값 돌아왔다22222");
  return res.data;
};
const LASTSIXMONTH = async () => {
  // console.log("값 들어간다11111");
  const res = await adminAPI.lastSixMonth();
  // console.log("값 돌아왔다22222");

  return res.data;
};
const YEARCHART = async () => {
  // console.log("YEARCHART 값 들어간다11111");
  const res = await adminAPI.yearchart();
  // console.log("YEARCHART 값 돌아왔다22222");
  return res.data;
};
const SALESITEM = async () => {
  // console.log("SALESITEM 값 들어간다11111");
  const res = await adminAPI.salesItem();
  // console.log("SALESITEM 값 돌아왔다22222");
  return res.data;
};
//Sales Management
const PROFITSIX = async () => {
  // console.log("PROFITSIX 값 들어간다11111");
  const res = await adminAPI.profitSixmonth();
  // console.log("PROFITSIX 값 돌아왔다22222");
  return res.data;
};

//Dashborard
export const totalProfit = createAsyncThunk(
  "admin/dashboard/totalprofit",
  TOTALPROFIT
);
export const lastSixMonth = createAsyncThunk(
  "admin/dashboard/lastsixmonth",
  LASTSIXMONTH
);
export const yearchart = createAsyncThunk(
  "admin/dashboard/yearchat",
  YEARCHART
);

//Sales Management
export const profitSixmonth = createAsyncThunk(
  "admin/salesManagement/profitSixmonth",
  PROFITSIX
);
export const salesItem = createAsyncThunk(
  "admin/dashboard/salesItem",
  SALESITEM
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    totalProfitState: {
      price__sum: "",
    },
    lastSixMonthState: {},
    profitSixmonthState: [],
    yearchartState: [],
    salesItemState:{},


    //     usersState: [],
    type: "",
    keyword: "",
    params: {},
  },
  reducers: {},
  extraReducers: {
    //dashboard
    [totalProfit.fulfilled]: (state, action) => {
      // console.log(`redux data: ${action.payload["price__sum"]}`);
      state.totalProfitState = action.payload;
    },
    [lastSixMonth.fulfilled]: (state, action) => {
      // console.log(`redux data: ${action.payload}`);
      // console.log(
      //   `lastSixMonth 페이로드의 영번째를 알아보자: ${JSON.stringify(
      //     action.payload
      //   )}`
      // );
      state.lastSixMonthState = action.payload;
    },
    [yearchart.fulfilled]: (state, action) => {
      // console.log(`redux data: ${action.payload}`);
      // console.log(
      //   `yearchart 페이로드의 영번째를 알아보자: ${JSON.stringify(
      //     action.payload
      //   )}`
      // );
      state.yearchartState = action.payload;
    },
    [profitSixmonth.fulfilled]: (state, action) => {
      // console.log(`redux data: ${action.payload}`);
      // console.log(
      //   `profitSixmonth 페이로드의 영번째를 알아보자: ${JSON.stringify(
      //     action.payload
      //   )}`
      // );
      state.profitSixmonthState = [
        ...state.profitSixmonthState,
        action.payload,
      ];
    },
    [salesItem.fulfilled]: (state, action) => {
      // console.log(`redux data: ${action.payload}`);
      // console.log(
      //   `salesItem 페이로드의 영번째를 알아보자: ${JSON.stringify(
      //     action.payload
      //   )}`
      // );
      state.salesItemState = action.payload;
      // console.log(
      //   `salesItem 페이로드의 영번째를 알아보자2222222222222: ${JSON.stringify(
      //     action.payload
      //   )}`
      // );
    },
  },
});

export const currentTotalState = (state) => state.admin.totalProfitState;
export const currentLastSixMonthState = (state) =>
  state.admin.lastSixMonthState;
export const currentYearchartState = (state) => state.admin.yearchartState;
export const currentProfitSixmonthState = (state) =>
  state.admin.profitSixmonthState;
export const currentSalesItemState = (state) =>
  state.admin.salesItemState;
export default adminSlice.reducer;
