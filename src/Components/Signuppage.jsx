import React from 'react'
import { Card, Form, Button} from 'react-bootstrap'
import { CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div>
        <Card className='m-auto' style={{width:"400px", minHeight:'500px', marginTop:'10px'}}>
            <CardBody>
                <h5>
                    EDSIONVALLEY
                </h5>
               <p className='text-primary mt-5' >Register</p>
               <p className='mt-5'>Username</p>
               <Form.Control
              type="search"
              placeholder="Enter username"/>
               <p>Password</p>
               <Form.Control
              type="search"
              placeholder="Enter Password"/>
              <Button variant="primary" className='mt-3 w-100'>Login</Button>
              <p className='text-center'>Already have an Account?<Link to={'/login'} variant="link" >Login</Link></p>
              <p className='mt-5'>© 2020 Edisonvalley. Design & Develop by Osperb</p>
            </CardBody>
        </Card>
    </div>
  )
}
