import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { recommandAPI } from "..";

const RECOMMANDLIST = async (x) => {
  const res = await recommandAPI.recommandList(x);
  return res.data;
};
const RECOMMANDSAVE = async (x) => {
  const res = await recommandAPI.recommandSave(x);
  const payment = await recommandAPI.payment(res.data);
  return [res.data, payment.data];
};
const MYRESERVATION = async () => {
  const res = await recommandAPI.myReservation();
  return res.data;
};

export const recommandList = createAsyncThunk("/recommand", RECOMMANDLIST);
export const recommandSave = createAsyncThunk(
  "/rec/reservation",
  RECOMMANDSAVE
);
export const myReservation = createAsyncThunk(
  "/mypage/myReservation",
  MYRESERVATION
);

const recommandSlice = createSlice({
  name: "recommand",
  initialState: {
    recommandState: [],
    saveState: [],
    myReservationState: [],
    // 아래 세개는 필수
    type: "",
    keyword: "",
    params: {},
  },
  reducers: {}, // 필수
  extraReducers: {
    [recommandList.fulfilled]: (state, action) => {
      state.recommandState = [...state.recommandState, action.payload];
    },

    [recommandSave.fulfilled]: (state, action) => {
      state.saveState = [...state.saveState, action.payload];
    },
    [myReservation.fulfilled]: (state, action) => {
      state.myReservationState = [...state.myReservationState, action.payload];
    },
  },
});
export const currentRecommandState = (state) => state.recommand.recommandState;
export const currentSaveState = (state) => state.recommand.saveState;
export const currentMyReservationState = (state) =>
  state.recommand.myReservationState;

export default recommandSlice.reducer;
