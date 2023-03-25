import React, { useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import img from './dadaa.png'
import spidey from './spidermann.png'
import { FiDownload } from "react-icons/fi";
import { RiFileCopy2Fill } from "react-icons/ri";
import Outline from './Outline';
import Topbar from './Topbar';
import { useDispatch, useSelector } from 'react-redux';
import { profileApi } from '../Store/login/UseApi';
import { BiDownvote } from 'react-icons/bi';

export default function Dashboard() {

  const{Profile}= useSelector ((state)=>({
    Profile:state.LoginReducer.Profile,
  }))

  console.log(Profile.email);

  const dispatch = useDispatch()
  useEffect(() => {
    
  dispatch
(profileApi())   
  }, [dispatch])
  
  return (
    <div>
      <Topbar className='d-flex'/>
        <div className='d-flex'>

        <Outline/>
        <div className='w-100'>
        <h3 className='mx-3'>Dashboard</h3>
        <Row style={{padding:"15px"}}>
    <Col sm={4}>
        <Card className='cardd' style={{minHeight:"270px",position:"relative"}}>
          <div style={{minHeight:"150px",backgroundColor:"rgb(155, 155, 214)"}}>
            <Row>
                <Col md="5" className='crd'>
                    <h5>Welcome back !</h5>
                </Col>
                <Col md="5" >
                <img style={{width:"200px",height:"150px"}} src={img} alt="" />
                </Col>
            </Row>
            </div>
            <div>
              <Row>
               
                <Col md="4">
                <img className='spidey' style={{width:'50px',height:'50px',position:"absolute",top:"120px"}} src={spidey} alt="" />
                  <h5 className='mt-5' style={{padding:"5px"}}>{Profile.username}</h5>
                {Profile.email}</Col>
                <Col md="4"><h5>365</h5>
                 Kills
             <div className="profbtn">
              <Button>
              View Profile

              </Button>
                </div>
                </Col>
                
                <Col md="4"><h5>365</h5>
                Missions</Col>
              </Row>
            </div>
        </Card> 
    </Col>
    <Col sm={4}>
        <Card className='cardd' style={{minHeight:"140px",position:"relative"}}>
Available Courses
<p>5</p>
<FiDownload className=' text-primary' style={{fontSize:'50px'}}/>
           </Card>
           <Card className='cardd' style={{minHeight:"140px",position:"relative"}}>
Total Students
<p>5</p>
<RiFileCopy2Fill className=' text-primary ' style={{fontSize:'50px'}}/>
           </Card>
        </Col>
        <Col sm={4}>
        <Card className='cardd' style={{minHeight:"140px",position:"relative"}}>
 Course Completed Students
<p>5</p>
<BiDownvote className=' text-primary' style={{fontSize:'50px'}}/>
           </Card>
           <Card className='cardd' style={{minHeight:"140px",position:"relative"}}>
Total Students
<p>5</p>
<RiFileCopy2Fill className=' text-primary' style={{fontSize:'50px'}}/>
           </Card>
        </Col>
       
    </Row>
    </div>
    
    {/* <Row>
        <Col sm={4}>
        <Card className='cardd' style={{minHeight:"140px",position:"relative"}}>
Available Courses
<p>5</p>
<FiDownload/>
           </Card>
        </Col>
    </Row> */}
   
        </div>
   
    </div>
  )
}
