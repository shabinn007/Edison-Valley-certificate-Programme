import React, { useState } from 'react'
import { Button, Card, Form} from 'react-bootstrap'
import { CardBody } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {loginApi} from "../Store/login/UseApi"

// export default function LoginPage() {
  const LoginPage = () => {

    const {loading } = useSelector((state) => ({
      
      loading: state.LoginReducer.loading,
    }));
  
    const navigate = useNavigate()
  
   
    const dispatch = useDispatch();
    const [state, setState] = useState({username:"",password:""});
  
  
    const HandleLogin = (e) => {
      e.preventDefault()
      dispatch(loginApi(state,navigate));
    };
  
  return (
    <div>
        <Card className='m-auto' style={{width:"400px", minHeight:'500px', marginTop:'10px'}}>
          <Form onClick={(e)=> HandleLogin(e)} >
            <CardBody>
                <h5>
                    EDSIONVALLEY
                </h5>
               <p className='text-primary mt-5' >Login</p>
               <p className='mt-5' 
               >Username</p>
               <Form.Control
              //  name="username"
              type="text"
              placeholder="Enter username"
              onChange={(e) => setState({...state, username: e.target.value})}
              />
               <p>Password</p>
               <Form.Control
              type="password"
              // name="password"
              placeholder="Enter Password"
              onChange={(e) => setState({...state, password: e.target.value})}
              />
            <Button type='submit'  variant="primary" className='btn btn-primary mt-3 w-100'> {loading ? 'loading...': "login"}</Button> 
              <p className='text-center'>you dont have an account?<Link to={'/signup'} variant="link" >Register</Link></p>
              <p className='mt-5'>© 2020 Edisonvalley. Design & Develop by Osperb</p>
               
            </CardBody>
            </Form>
        </Card>
    </div>
  )
}
export default LoginPage