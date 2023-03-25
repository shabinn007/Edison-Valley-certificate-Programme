// import {
//     COURSE_CATAGORY_REQUEST,
//     COURSE_CATAGORY_FAIL,
//     COURSE_CATAGORY_SUCCESS,
//     GET_CATAGORY_FAIL,
//     GET_CATAGORY_SUCCESS,
//     GET_CATAGORY_REQUEST,
//     VIEW_CATAGORY_REQUEST,
//     VIEW_CATAGORY_SUCCESS,
//     VIEW_CATAGORY_FAIL,
//     UPDATE_CATAGORY_REQUEST,
//     UPDATE_CATAGORY_SUCCESS,
//     UPDATE_CATAGORY_FAIL,
//     DELETE_CATAGORY_REQUEST,
//     DELETE_CATAGORY_SUCCESSS,
//     DELETE_CATAGORY_FAIL,
//   } from "./ActionType";
  
//   //------------course catagory-----------//
  
//   export const courseCatagoryRequest = (input) => ({
//     type: COURSE_CATAGORY_REQUEST,
//     payload: input,
//   });
  
//   export const courseCatagorySuccess = (userDetails) => ({
//     type: COURSE_CATAGORY_SUCCESS,
//     payload: userDetails,
//   });
  
//   export const courseCatagoryFail = (error) => ({
//     type: COURSE_CATAGORY_FAIL,
//     payload: error,
//   });
  
//   //----------------GET COURSE CATAGORY--------------//
  
//   export const getCatagoryRequest = () => ({
//     type: GET_CATAGORY_REQUEST,
//     payload: "",
//   });
  
//   export const getCatagorySuccess = (courseCatagory) => ({
//     type: GET_CATAGORY_SUCCESS,
//     payload: courseCatagory,
//   });
  
//   export const getCatagoryFail = (error) => ({
//     type: GET_CATAGORY_FAIL,
//     payload: error,
//   });
  
//   //--------------------view course catagory------------//
  
//   export const viewCatagoryRequest = () => ({
//     type: VIEW_CATAGORY_REQUEST,
//     payload: "",
//   });
  
//   export const viewCatagorySuccess = (singleView) => ({
//     type: VIEW_CATAGORY_SUCCESS,
//     payload: singleView,
//   });
  
//   export const viewCatagoryFail = () => ({
//     type: VIEW_CATAGORY_FAIL,
//     payload: ""
//   });
  
//   //---------------------UPDATE COURSE CATAGORY----------------//
  
//   export const updateCatagoryRequest = () => ({
//     type: UPDATE_CATAGORY_REQUEST,
//     payload: "",
//   });
  
//   export const updateCatagorySuccess = (courseCatagoryUpdate,catId) => ({
//     type: UPDATE_CATAGORY_SUCCESS,
//     payload: courseCatagoryUpdate,catId
//   });
  
//   export const updateCatagoryFail = () => ({
//     type: UPDATE_CATAGORY_FAIL,
//     payload: "",
//   });
  
//   //-------------delete CATAGORY----------//
  
//   export const deleteCatagoryRequest = () => ({
//     type: DELETE_CATAGORY_REQUEST,
//     payload: "",
//   });
  
//   export const deleteCatagorySuccess = (deleteCatagory) => ({
//     type: DELETE_CATAGORY_SUCCESSS,
//     payload: deleteCatagory
//   });
  
//   export const deleteCatagoryFail = () => ({
//     type: DELETE_CATAGORY_FAIL,
//     payload: "",
//   });