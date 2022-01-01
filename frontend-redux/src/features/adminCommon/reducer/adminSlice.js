import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "..";

//Dashborard
const TOTALPROFIT = async () => {
  const res = await adminAPI.totalProfit();
  return res.data;
};
const LASTSIXMONTH = async () => {
  const res = await adminAPI.lastSixMonth();
  return res.data;
};
const YEARCHART = async () => {
  const res = await adminAPI.yearchart();
  return res.data;
};
const SALESITEM = async () => {
  const res = await adminAPI.salesItem();
  return res.data;
};
//Sales Management
const COSTSIX = async () => {
  const res = await adminAPI.costSixmonth();
  return res.data;
};
const COSTDETAILS = async () => {
  // console.log("COSTSIX 값 들어간다11111");
  const res = await adminAPI.costDetails();
  // console.log("COSTSIX 값 돌아왔다22222");
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
export const salesItem = createAsyncThunk(
  "admin/dashboard/salesItem",
  SALESITEM
);

//Sales Management
export const costSixmonth = createAsyncThunk(
  "admin/salesManagement/costSixmonth",
  COSTSIX
);
export const costDetails = createAsyncThunk(
  "admin/salesManagement/costDetails",
  COSTDETAILS
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    totalProfitState: {
      price__sum: "",
    },
    lastSixMonthState: {},
    costSixmonthState: [],
    yearchartState: [],
    salesItemState: {},
    costDetailsState: [],
    type: "",
    keyword: "",
    params: {},
  },
  reducers: {},
  extraReducers: {
    //dashboard
    [totalProfit.fulfilled]: (state, action) => {
      state.totalProfitState = action.payload;
    },
    [lastSixMonth.fulfilled]: (state, action) => {
      state.lastSixMonthState = action.payload;
    },
    [yearchart.fulfilled]: (state, action) => {
      state.yearchartState = action.payload;
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
    [yearchart.fulfilled]: (state, action) => {
      state.yearchartState = action.payload;
    },

    //sales management
    [costSixmonth.fulfilled]: (state, action) => {
      state.costSixmonthState = [...state.costSixmonthState, action.payload];
    },
    [costDetails.fulfilled]: (state, action) => {
      state.costDetailsState = [...state.costDetailsState, action.payload];
    },
  },
});

//dashboard
export const currentTotalState = (state) => state.admin.totalProfitState;
export const currentLastSixMonthState = (state) =>
  state.admin.lastSixMonthState;
export const currentYearchartState = (state) => state.admin.yearchartState;
export const currentSalesItemState = (state) => state.admin.salesItemState;
//sales management
export const currentCostSixmonthState = (state) =>
  state.admin.costSixmonthState;
export const currentCostDetailsState = (state) => state.admin.costDetailsState;
export default adminSlice.reducer;
