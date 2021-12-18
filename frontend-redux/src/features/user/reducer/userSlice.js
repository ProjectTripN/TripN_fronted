import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "..";

const JOIN = async (x) => {
  const res = await userAPI.join(x);
  return res.data;
};
const LOGIN = async (x) => {
  const res = await userAPI.login(x);
  return res.data;
};
// const EXIST = async (x) => {
//   const res = await userAPI.exist(x)
//   return res.data
// }
// const DETAIL = async (x) => {
//   const res = await userAPI.detail()
//   return res.data
// }
// const LIST = async ({page}) => {
//   const res = await userAPI.list(page)
//   return res.data
// }
// const MODIFY = async (x) => {
//   const res = await userAPI.modify(x)
//   return res.data
// }
// const REMOVE = async (x) => {
//   const res = await userAPI.remove(x)
//   return res.data
// }

export const join = createAsyncThunk("joinDetail", JOIN);
export const login = createAsyncThunk("users/login", LOGIN);
// export const exist = createAsyncThunk('user/exist', EXIST)
// export const detail = createAsyncThunk('users/one', DETAIL)
// export const list = createAsyncThunk('users/list', LIST)
// export const modify = createAsyncThunk('users/modify', MODIFY)
// export const remove = createAsyncThunk('users/remove', REMOVE)

const changeNull = (ls) => {
  for (const i of ls) {
    document.getElementById(i).value = "";
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    userState: {
      username: "",
      password: "",
      checkPassword: "",
      name: "",
      last_name: "",
      first_name: "",
      phone_number: "",
      email: "",
      address: "",
      passport: "",
      birth: "",
      gender: "",
      card_company: "",
      card_number: "",
    },
    usersState: [],
    type: "",
    keyword: "",
    params: {},
  },
  reducers: {},
  extraReducers: {
    [join.fulfilled]: (state, action) => {
      state.userState = action.payload; // 전체 리덕스 즉 스토어에서.userState
      // window.location.href = `/joinDetail`;
    },

    [login.fulfilled]: (state, { meta, payload }) => {
      state.userState = payload;
      window.localStorage.setItem("sessionUser", JSON.stringify(payload)); // window 전역
      if (payload.username != null) {
        alert(`${payload.name}님 환영합니다`);
        // window.location.href = `/users/detail`;
      } else {
        alert("아이디, 비번 오류로 로그인 실패  ");
        changeNull(["username", "password"]);
      }
    },

    // [detailPage.fulfilled]: ( state, {meta, payload} ) => { state.userState = payload },
    // [listPage.fulfilled]: ( state, {meta, payload} ) => {
    //      state.userState = payload },

    // -----------------------------------
    // [exist.fulfilled]: ( state, action ) => {
    //     if(action.payload){window.location.href='/users/add'}
    //     else{ alert(`사용가능함`) }
    //   },
    // [detail.fulfilled]: ( state, {meta, payload} ) => { state.userState = payload},
    // [list.fulfilled]: ( state, {meta, payload} ) => {
    //     state.usersState = payload },

    // [modify.fulfilled]: ( state, action ) => {
    //     localStorage.setItem('sessionUser', JSON.stringify(action.payload))
    //     window.location.href = "/users/detail"
    // },
    // [remove.fulfilled]: () => {
    //     window.localStorage.removeItem("sessionUser")
    //     window.localStorage.clear();
    //     window.location.href = "/home"
    // },
  },
});

export default userSlice.reducer;
