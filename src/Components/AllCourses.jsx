import React from 'react'
import { Card, Table } from 'react-bootstrap'
import Outline from './Outline'
import '../App.css'
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Topbar from './Topbar';

export default function Allcourses() {
  return (
    <div>
        <Topbar/>
        <div className='d-flex'>

        <Outline/>
        <Card style={{width:"800px", minHeight:'400px', marginTop:'10px', marginLeft:'30px'}}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Course category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>React</td>
          <td>34</td>
          <td>devo</td>
          <td>
            <MdEdit className='text-primary'/>
            <ImCross className="text-danger mx-3"/>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>yaho</td>
          <td>55</td>
          <td>devo</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>tweet</td>
          <td>55</td>
          <td>devo</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    </Card>
        </div>
    </div>
  )
}
