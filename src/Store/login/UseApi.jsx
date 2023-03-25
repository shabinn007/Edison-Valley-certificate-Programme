import { loginFail, loginRequest, loginSuccess, profileFail, profileRequest, profileSuccess, logoutFail, logoutRequest, logoutSuccess,} from "./Actioin";
// import axios from "axios";
// import { token } from "react";
// import { navigate } from "react-router";
import { axiosApi } from "./../Axiosmethod";


export const loginApi = (input, navigate) => {
    return async (dispatch) => {
      dispatch(loginRequest(input));
  
      try {
        const user = await axiosApi.post(`/account/login/`, input);
        console.log(user);
        if (user?.data?.token) {
          sessionStorage.setItem("token", user?.data?.token);
          navigate("/dashboard");
          dispatch(loginSuccess(user?.data));
        }
      } catch (error) {
        console.log(error);
        dispatch(loginFail(error?.response?.data));
      }
    };
  };
  
  //---------------------logout--------------------------//
  
   export const logoutApi = (navigate) => {
     return async (dispatch) => {
       dispatch(logoutRequest());
  
       try {
         const token = sessionStorage.getItem("token");
  
         // console.log(token);
         const user = await axiosApi.post(`/account/logout/`, token);
  
         console.log(user);
  
         // if (user) {
         dispatch(logoutSuccess(user));
         sessionStorage.clear("token");
         navigate("/");
         // }
       } catch (error) {
         dispatch(logoutFail(error?.response?.data));
       }
     };
   };
  
  // //--------------------profile---------------------------//
  
   export const profileApi = () => {
     console.log();
     return async (dispatch) => {
       dispatch(profileRequest());
  
       try {
         const user = await axiosApi.get("/account/profile/");
         if (user) {
           dispatch(profileSuccess(user.data));
         }
         console.log(user);
       } catch (error) {
         dispatch(profileFail(error?.response?.data));
       }
     };
   };