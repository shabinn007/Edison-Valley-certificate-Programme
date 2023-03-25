import React from 'react'
import Outline from './Outline'
import { Card, Col, Row, Button, Label } from 'reactstrap'
import { Form } from 'react-bootstrap'
import { CardBody, Input } from 'reactstrap'
import Topbar from './Topbar'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createApi } from '../Store/students/UseApi'

export default function Createstudent() {
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [state, setState] = useState('')
      console.log(state);

      const HandleCreateStudent =(e) => {
        e.preventDefault()
        dispatch(createApi(state, navigate))
      }

  return (
        <div>
          <Topbar/>
        <div className='d-flex'>

        <Outline/>
        <Card style={{width:"800px", minHeight:'500px', marginTop:'10px', marginLeft:'30px'}}>
            <CardBody>
              <Form onSubmit={HandleCreateStudent}>
                <h5>Create Student</h5>
                <Row>
                    <Col md='6'>

              <Label>Full Name :</Label>
                        <Input
                         type="text"
                         placeholder="Enter your Full Name"
                         name='full_name'
                         onChange={(e) =>
                         setState({...state, full_name: e.target.value})
                       } /> 

              <Label>email :</Label>
                        <Input
                         type="email"
                         placeholder="Email"
                         name='email'
                         onChange={(e) =>
                         setState({...state, email: e.target.value})
                         }/>

              <Label>Date of Birth </Label>
                        <Input
              type="date"
              placeholder="dd-mm-yy"
              name='dob'
              onChange={(e) =>
              setState({...state, dob: e.target.value })
              }>
              </Input>


              <Label>address :</Label>
                        <Input
              type="text"
              placeholder="place"
              name='address'
              onChange={(e) =>
              setState({...state, phone: e.target.value })
              }>Address :</Input>




              {/* <div>
                <p className='m-1'>Image :</p>
                <input
                name='imgg'
                onChange={(e) => 
                  setState({...state, img: e.target.value })
                } 
                ></input>
              <Button className='m-2'>Choose file</Button>
              </div> */}
                    </Col>
                    <Col md='6'>


                <Label>Designation :</Label>
                        <Input
              type="text"
              placeholder="something"
              name='designation'
              onChange={(e) =>
              setState({...state, phone: e.target.value})
              }>
              </Input>


              <Label>Joining Date :</Label>
                        <Input
              type="date"
              placeholder="dd-mm-yy"
              name='start_date'
              onChange={(e) =>
                setState({...state, start_date: e.target.value})
                }>
                </Input>




                <Label>Date of Leaving :</Label>
                        <Input
              type="date"
              name='end_date'
              placeholder="dd-mm-yy"
              onChange={(e) =>
                setState({...state, end_date: e.target.value})
                }> 
                </Input>



                <Label>Phone number :</Label>
                        <Input
              type="number"
              placeholder="000-0000-000"
              name='phone'
              onChange={(e) =>
              setState({...state, phone: e.target.value})
              }>
              </Input>





              <div>
                
                <Button color='secondary'>Back</Button>


              <Button className='m-5' color='success'
               type='submit'>Create</Button>
               
               </div>
                
                
                    </Col>
                </Row>
                </Form>
            </CardBody>

        </Card>
        </div>
    </div>
  )
}
