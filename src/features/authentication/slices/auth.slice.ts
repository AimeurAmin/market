import { RootState } from "@app/store";
import { locallyStore, localStorageGet } from "@app/utils";
import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin, LoginInfoModel } from "../services/authentication.service";

interface authModel {
  value: {
    email?: string;
    token?: string;
  } | undefined;
  loading: boolean;
  error: any;
}

const initialState: authModel = {
  value: undefined,
  loading: false,
  error: undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadSession: (state) => {
      const token = localStorageGet("token");
      if(token) {
        state.value = { token };
      };
    },
    login: (state, action: { payload: any }) => {
      state.value = {
        email: action.payload.email,
        token: action.payload.token
      }
      state.loading = false
      state.error = undefined

      locallyStore("token", action.payload.token);

      action.payload.navigate('/')

    },
    setLoading: (state, action: {payload: boolean}) => {
      state.loading = action.payload;
    },
    setError: (state, action: {payload: {status: string; message: string}}) => {
      state.loading= false;
      state.value = undefined
      state.error = action.payload.message
    }
  }
})

export const {login, setLoading, setError, loadSession} = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.value?.token;

export const asyncLogin = ({email, password}: LoginInfoModel, navigate: any) => (dispatch: any) => {
  dispatch(setLoading(true));
  fetchLogin({email, password}).then(({data}: any) => {
    dispatch(login({email, token: data.token, navigate}));
  }).catch((err: any) => {
    console.log(err);
    dispatch(setError({status: err.status, message: err.message}))
  });
}

export default authSlice.reducer;