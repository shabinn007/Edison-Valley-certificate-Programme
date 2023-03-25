import React from 'react'
import { Button, Dropdown, Form, NavDropdown } from 'react-bootstrap'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutApi } from '../Store/login/UseApi'

export default function Topbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutApi(navigate))
  }
  return (
    <div>
         <div className= 'm-2'>
         <div className="Topbar" style={{display:'flex', justifyContent:'space-between',boxshadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
          <div className="left" style={{display:'flex'}}>
            <h4 className='mt-2'>EDISONVALLEY</h4>
          <Button  variant="Light" >
      <BiMenu  style={{fontSize:'30px'}} />
      </Button>
            <Form className="d-flex">
            <Form.Control
            style={{width:"200px",height:'30px',borderRadius:'30px',backgroundColor:'#dfdfe5'}}
              type="search"
              placeholder="Search..."
              className="m-2"
              aria-label="Search"
            />  
          </Form>
          </div>
          <div className="right">
         <NavDropdown 
              className='m-2'
              id="nav-dropdown-dark-example"
              title="Admin"
            >
      <Dropdown.Item styl href="#/action-1"><AiOutlineArrowRight/>View Profile</Dropdown.Item>
      <Dropdown.Item href="#/action-2"><AiOutlineArrowRight/>Settings</Dropdown.Item>
      <Dropdown.Item style={{color:"red"}} href="#/action-3" onClick={handleLogout}> <AiOutlineArrowRight/>Logout</Dropdown.Item>
      
      </NavDropdown>
      </div>
      </div>
    </div>
    </div>
  )
}
