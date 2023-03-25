import React from 'react'
import '../App.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiHomeCircle, BiCategoryAlt } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { BsShopWindow } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function Outline() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <div>
      {/* .............Topbar.....................?/ */}
   
{/* ........................sidebar........................ */}
<div className="sidebarr">
<>
     

      {/* <Offcanvas show={show} onHide={handleClose}> */}
        {/* <Offcanvas.Header > */}
       
        {/* </Offcanvas.Header> */}
        <Offcanvas.Body style={{maxWidth:'300px'}}>
       
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                {/* <h2 className='sidebarMainTiltle'>EDISONVALLEY</h2> */}
                <ul className='sidebarList'>
                    <Link className='p-0' to={'/dashboard'} style={{textDecoration:'none'}}>
                    <li style={{color:'black'}} className='sidebarListItem'>
                        <BiHomeCircle className='sidebarIcon'/>  Dashboard
                    </li>
                    </Link>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTiltle'><HiUserCircle className='sidebarIcon'/> Students</h3>
                <ul className='sidebarList'>
                <Link className='p-0' to={'/allstudents'} style={{textDecoration:'none'}}>
                    <li style={{color:'black'}} className='sidebarListItem'>
                        All Students
                    </li>
                    </Link>
                    <Link className='p-0' to={'/updatestudent'} style={{textDecoration:'none'}}>
                    <li style={{color:'black'}} className='sidebarListItem'>
                        Update Student
                    </li>
                    </Link>
                    <Link className='p-0' to={'/createstudent'} style={{textDecoration:'none'}}>
                    <li style={{color:'black'}} className='sidebarListItem'>
                        Create Student
                    </li>
                    </Link>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTiltle'><BsShopWindow className='sidebarIcon'/>Courses</h3>
                <ul className='sidebarList'>
                <Link className='p-0' to={'/allcourses'} style={{textDecoration:'none'}}>
                    <li  style={{color:'black'}} className='sidebarListItem'>
                        All Courses
                    </li>
                    </Link>

                    <Link className='p-0' to={'/updatecourses'} style={{textDecoration:'none'}}>
                    <li  style={{color:'black'}} className='sidebarListItem'>
                        Update Courses
                    </li>
                    </Link>

                    <Link className='p-0' to={'/createcourses'} style={{textDecoration:'none'}}>
                    <li  style={{color:'black'}} className='sidebarListItem'>
                        Create Courses
                    </li>
                    </Link>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTiltle'><BiCategoryAlt className='sidebarIcon'/>Couses category</h3>
                <ul className='sidebarList'>

                    <Link className='p-0' to={'/allcoursescategory'} style={{textDecoration:'none'}}>
                    <li  style={{color:'black'}} className='sidebarListItem'>
                        All Couses category
                    </li>
                    </Link>

                    
                    <Link className='p-0' to={'/updatecoursescategory'} style={{textDecoration:'none'}}>
                    <li  style={{color:'black'}} className='sidebarListItem'>
                        Update Couses category
                    </li>
                    </Link>
                    
                    <Link className='p-0' to={'/createcoursescategory'} style={{textDecoration:'none'}}>
                    <li  style={{color:'black'}} className='sidebarListItem'>
                        Create Courses category
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    
        </Offcanvas.Body>
      {/* </Offcanvas> */}
    </>
</div>

    </div>
  );
}
