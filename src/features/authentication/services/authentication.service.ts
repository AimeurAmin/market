import axios from "axios";

const baseUrl = 'https://applicationapischool.herokuapp.com/api'

export interface LoginInfoModel {
  email: string;
  password: string;
}

// const fetchLogin = ({email, password}: LoginInfoModel): Promise<{status: string; message: string; token: string;}> => {
//   return axios.post(`${baseUrl}/auth/login`, {email, password});
// }

const fetchLogin = ({email, password}: LoginInfoModel) => {  
  return axios.post(`${baseUrl}/auth/login`, {email, password})
}

export {fetchLogin, }