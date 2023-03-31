/** @format */

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./ActionType";
import { PROFILE_FAIL, PROFILE_REQUEST, PROFILE_SUCCESS } from "./ActionType";
import { LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./ActionType";

const initiailState = {
  loding: false,
  error: "",
  userDetails: [],
  logoutDetails: "",
  Profile: {},
};

const LoginReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PROFILE_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case PROFILE_SUCCESS:
      return {
        ...state,
        loding: false,
        Profile: action.payload,
      };

    case PROFILE_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loding: false,
        logoutDetails: "",
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default LoginReducer;
