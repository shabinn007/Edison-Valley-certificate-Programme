import React from 'react'
import Outline from './Outline'
import { Card, Col, Row, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { CardBody } from 'reactstrap'
import Topbar from './Topbar'

export default function UpdateCourses() {
  return (
    <div>
      <Topbar/>
        <div className='d-flex'>

        <Outline/>
        <Card style={{width:"800px", minHeight:'400px', marginTop:'10px', marginLeft:'30px'}}>
            <CardBody>
                <h5>Update Courses</h5>
                <Row>
                    <Col md='6'>
                        <p >Course Name :</p>
                        <Form.Control
              type="search"
              placeholder="Enter a Course"/>
              <p>Duration :</p>
                        <Form.Control
              type="search"
              placeholder="Enter a Duration"/>
              <p>Course Category :</p>
              <DropdownButton variant='Light' id="dropdown-basic-button" title="Select-Category">
      <Dropdown.Item href="#/action-2">Front-End</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Back-End</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Full-Stack</Dropdown.Item>
    </DropdownButton>
                    </Col>
                
              <div className='justify-content-end d-flex mt-5'>
                <Button className='m-1' variant='secondary'>Back</Button>
               <Button className='m-1' variant='success'>Update</Button>
               </div>
                </Row>
            </CardBody>

        </Card>
        </div>
    </div>
  )
}
