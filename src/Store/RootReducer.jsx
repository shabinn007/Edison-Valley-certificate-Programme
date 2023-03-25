import { combineReducers } from "redux"
import LoginReducer from "./login/Reducer"
import StudentReducer from "./students/StudentReducer"


const RootReducer = combineReducers({
    LoginReducer,StudentReducer

    
    })
    
    export default RootReducer
