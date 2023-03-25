import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import { BiMapPin } from 'react-icons/bi'
import Outline from './Outline'
import { RiContactsFill } from "react-icons/ri";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import spiderman from './spiderman.png'
import Topbar from './Topbar';
import { useDispatch, useSelector } from 'react-redux';
import { studentApi } from '../Store/students/UseApi';
import { map } from 'lodash';

export default function AllStudent() {
  const dispatch = useDispatch()
  const {std}= useSelector((state) => ({
    std: state. StudentReducer?.allstudents?.data?.results
  })
  )
  console.log(std);
  useEffect(() => {
    dispatch(studentApi())
  
 
  }, [dispatch])
  
 console.log(std)

//  const salman = allstudents?.data?.results


  
  return (
    <div>
      <Topbar/>
        <div className='d-flex'>

        <Outline/>
        <h5>Student View</h5>
        {/* <Card style={{width:"1000px", minHeight:'450px', marginTop:'10px', marginLeft:'30px'}}>
          <Container>
          <Container>
          <Row>
            <Col md='6'>
              <h4>Shabin Sha</h4>
              <p>dd0-mm-yy</p>
              <BiMapPin className='text-primary'/>
               <p>Black house, 221B baker street<br/>
              London</p>
              <div className='d-flex'>
              <RiContactsFill className='text-primary mt-1'/>
              <p className='mx-2'>000-0000-000</p>
              </div>
              <h5>Contact Details :</h5>
              <div className='d-flex'>
              <AiOutlineMail className='text-primary mt-1'/> 
              <p className='mx-2'>E-mail :</p>
              <p> hahah@spider.com</p>
              </div>
              <div className='d-flex'>
                <BsFillTelephoneFill className='text-primary mt-1'/>
                <p className='mx-2'>Mobile</p>
                <p>000-0000-000</p>
              </div>
            </Col>
            <Col md='6'>
            <div>
            <img className='mt-5' src={spiderman} alt="" />
            <p className='mx-5' style={{color:'grey'}}>App developer</p>
            </div>
            <div className='justify-content-end d-flex'>
            <Button className='mt-5' variant='success'>Update</Button>
            <Button className='mx-3 mt-5' variant='danger'>Delete</Button>
            </div>
            </Col>
          </Row>
          </Container>
          </Container>
        </Card> */}
        <Card style={{width:"1000px", minHeight:'400px', marginTop:'10px', marginLeft:'30px'}}>
        <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>ID</th>
          <th>email</th>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Course category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* {std.map((item, key) => ( */}
        {map(std,(item, key) => (
        <tr key={key}>
        {/* <td>{item.id}</td> */}
        <td>{item.full_name}</td>
        <td>{item.email}</td>
        {/* <td>{item.student_courses}</td> */}
        <td>devo</td>
        <td>
            <MdEdit className='text-primary'/>
            <ImCross className="text-danger mx-3"/>
          </td>
      </tr>
      ))}
      </tbody>
    </Table>
    </Card>
        </div>
    </div>
  )
}
