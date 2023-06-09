/** @format */

import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType";
import { PROFILE_FAIL, PROFILE_REQUEST, PROFILE_SUCCESS } from "./ActionType";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL } from "./ActionType";
import { LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./ActionType";

// .............................SIGNUP..........................................

export const signupRequest = (input, navigate) => ({
  type: SIGNUP_REQUEST,
  payload: { input, navigate },
});

export const signupSuccess = userDetails => ({
  type: SIGNUP_SUCCESS,
  payload: userDetails,
});

export const signupFail = error => ({
  type: SIGNUP_FAIL,
  payload: error,
});

// .............................LOGIN..........................................

export const loginRequest = input => ({
  type: LOGIN_REQUEST,
  payload: input,
});

export const loginSuccess = userDetails => ({
  type: LOGIN_SUCCESS,
  payload: userDetails,
});

export const loginFail = error => ({
  type: LOGIN_FAIL,
  payload: error,
});

// // ............logout................

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
  payload: "",
});

export const logoutSuccess = res => ({
  type: LOGOUT_SUCCESS,
  payload: res,
});
export const logoutFail = error => ({
  type: LOGOUT_FAIL,
  payload: error,
});

// // ........profile.......

export const profileRequest = () => ({
  type: PROFILE_REQUEST,
  payload: "",
});

export const profileSuccess = profile => ({
  type: PROFILE_SUCCESS,
  payload: profile,
});

export const profileFail = error => ({
  type: PROFILE_FAIL,
  payload: error,
});
