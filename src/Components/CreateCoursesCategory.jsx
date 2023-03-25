import React from 'react'
import { Button, Card, Col, Row, Form } from 'react-bootstrap'
import { CardBody } from 'reactstrap'
import Outline from './Outline'
import Topbar from './Topbar'

export default function CreateCoursesCategory() {
  return (
    <div>
      <Topbar/>
        <div className='d-flex'>

        <Outline/>
        <Card style={{width:"800px", minHeight:'400px', marginTop:'10px', marginLeft:'30px'}}>
            <CardBody>
                <h5>Create Course Category</h5>
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
                </Col>
                <div className='justify-content-end d-flex mt-5'>
                  <Button className='m-1' variant='secondary'>Back</Button>
                 <Button className='m-1' variant='success'>Create</Button>
                 </div>
                  </Row>
              </CardBody>
          </Card>
        </div>
    </div>
  )
}
