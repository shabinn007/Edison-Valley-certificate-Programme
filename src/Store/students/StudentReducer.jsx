import { CREATE_REQUEST,CREATE_SUCCESS,CREATE_FAIL, STUDENT_REQUEST, STUDENT_SUCCESS, STUDENT_FAIL, SINGLE_VIEW_REQUEST, SINGLE_VIEW_SUCCESS, SINGLE_VIEW_FAIL } from "./Actiontype";

const InitialState ={
    loading: false,
    error: "",
    createDetails:[],
    allstudents:[]
}

const StudentReducer = (state=InitialState,action)=>{
    switch(action.type){
        // ...........craete.............

case CREATE_REQUEST:
    return{
        ...state,
        loading:true
    }

case CREATE_SUCCESS:
    return{
        ...state,
        loading:false,
        createDetails:action.payload,
        error:''
    }

case CREATE_FAIL:
    return{
        ...state,
        loading:false,
        error:action.payload
    }



    // ...................All Students................................


case STUDENT_REQUEST:
    return{
        ...state,
        loading:true
    }

case STUDENT_SUCCESS:
    return{
        ...state,
        loading:false,
        allstudents:action.payload,
        error:''

    }    

case STUDENT_FAIL:
    return{
        ...state,
        loading:false,
        error:action.payload
    }    

// .........................singleview........................


case SINGLE_VIEW_REQUEST:
    return{
        ...state,
        loading:true
    }

case SINGLE_VIEW_SUCCESS:
    return{
        ...state,
        loading:false,
        allstudents:action.payload,
        error:''

    }    

case SINGLE_VIEW_FAIL:
    return{
        ...state,
        loading:false,
        error:action.payload
    }    











    
    default:
        return state;
    }
}

export default StudentReducer

