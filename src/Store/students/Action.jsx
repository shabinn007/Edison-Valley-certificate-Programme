import { CREATE_REQUEST,CREATE_SUCCESS,CREATE_FAIL, STUDENT_REQUEST, STUDENT_SUCCESS, STUDENT_FAIL, SINGLE_VIEW_REQUEST, SINGLE_VIEW_SUCCESS, SINGLE_VIEW_FAIL } from "./Actiontype";


// ....................create..................

export const createRequest=(input)=>
({
  type:CREATE_REQUEST,
  payload:input
})

export const createSuccess=(createDetails)=>
({
  type:CREATE_SUCCESS,
  payload:createDetails
})

export const createFail=(error)=>
({
  type:CREATE_FAIL,
  payload:error
})


// ............................ALL STUDENTS..............

export const studentRequest=()=>
({
  type: STUDENT_REQUEST,
  payload:''
})

export const studentSuccess=(user)=>
({
  type:STUDENT_SUCCESS,
  payload:user
})

export const studentFail=(error)=>
({
  type:STUDENT_FAIL,
  payload:error
})
// .......................singleview....................

export const singleviewRequest=()=>
({
  type: SINGLE_VIEW_REQUEST,
  payload:''
})

export const singleviewSuccess=(user)=>
({
  type:SINGLE_VIEW_SUCCESS,
  payload:user
})

export const singleviewFail=(error)=>
({
  type:SINGLE_VIEW_FAIL,
  payload:error
})