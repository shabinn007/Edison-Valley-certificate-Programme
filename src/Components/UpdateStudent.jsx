import React from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'
import { CardBody } from 'reactstrap'
import Outline from './Outline'
import Topbar from './Topbar'

export default function UpdateStudent() {
  return (
    <div>
      <Topbar/>
        <div className='d-flex'>

        <Outline/>
        <Card style={{width:"800px", minHeight:'500px', marginTop:'10px', marginLeft:'30px'}}>
            <CardBody>
                <h5>Update Student</h5>
                <Row>
                    <Col md='6'>
                        <p >Full Name :</p>
                        <Form.Control
              type="search"
              placeholder="Name"/>
              <p>Email :</p>
                        <Form.Control
              type="search"
              placeholder="Email"/>
              <p>Date of Birth :</p>
                        <Form.Control
              type="search"
              placeholder="dd-mm-yy"/>
              <p>Address :</p>
                        <Form.Control
              type="search"
              placeholder="place"/>
              <div>
                <p className='m-1'>Image :</p>
              <Button className='m-2'>Choose file</Button>
              </div>
                    </Col>
                    <Col md='6'>
                    <p>Designation :</p>
                        <Form.Control
              type="search"
              placeholder="something"/>
               <p>Joining Date :</p>
                        <Form.Control
              type="search"
              placeholder="dd-mm-yy"/>
               <p> Date of Leaving :</p>
                        <Form.Control
              type="search"
              placeholder="dd-mm-yy"/>
               <p>Phone number :</p>
                        <Form.Control
              type="search"
              placeholder="000-0000-000"/>
              <div><Button variant='secondary'>Back</Button>
              <Button className='m-5' variant='success'>Update</Button></div>
                    </Col>
                </Row>
            </CardBody>

        </Card>
        </div>
    </div>
  )
}
