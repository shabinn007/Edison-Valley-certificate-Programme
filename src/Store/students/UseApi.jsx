import {axiosApi} from '../Axiosmethod'
import { createRequest, createFail, createSuccess, studentSuccess, studentFail, studentRequest } from './Action';

// ...................create..................
export const createApi =( input, navigate) => {
    console.log(input);
    return async(dispatch)=>{
        dispatch(createRequest(input));

        try {
            const user = await axiosApi.post (`/student/student/`, input);
            console.log(user);
            dispatch(createSuccess(user));
            navigate("/allstudents");
          }

          catch (error) {
                console.log(error);
                dispatch(createFail(error))
          }
        }
    }

// ...............All studentSuccess......................


export const studentApi=(page) =>{
  console.log()
 
  return async(dispatch)=>{
    dispatch(studentRequest());

    try {
      const user = await axiosApi.get (`/student/student/?page=${page?page:1}`);
      console.log(user)
      dispatch(studentSuccess(user));
}

catch (error) {
  console.log(error);
  dispatch(studentFail(error));
}
  }
}
// .....................single visualViewport...................


