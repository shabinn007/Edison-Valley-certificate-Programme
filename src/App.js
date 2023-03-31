/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import Signuppage from "./Components/Signuppage";
import Outline from "./Components/Outline";
import Dashboard from "./Components/Dashboard";
import CreateStudent from "./Components/CreateStudent";
import UpdateStudent from "./Components/UpdateStudent";
import AllStudent from "./Components/AllStudent";
import AllCourses from "./Components/AllCourses";
import AllCoursesCategory from "./Components/AllCoursesCategory";
import UpdateCourses from "./Components/UpdateCourses";
import UpdateCoursesCategory from "./Components/UpdateCoursesCategory";
import CreateCourses from "./Components/CreateCourses";
import CreateCoursesCategory from "./Components/CreateCoursesCategory";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logedin" element={<Outline />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createstudent" element={<CreateStudent />} />
          <Route path="/updatestudent" element={<UpdateStudent />} />
          <Route path="/allstudents" element={<AllStudent />} />
          <Route path="/updatecourses" element={<UpdateCourses />} />
          <Route
            path="/updatecoursescategory"
            element={<UpdateCoursesCategory />}
          />
          <Route path="/allcourses" element={<AllCourses />} />
          <Route path="/allcoursescategory" element={<AllCoursesCategory />} />
          <Route path="/createcourses" element={<CreateCourses />} />
          <Route
            path="/createcoursescategory"
            element={<CreateCoursesCategory />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
