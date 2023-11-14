import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import PageHeader from "../PageHeader/PageHeader";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Courses() {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  const date = "" + course.startDate;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div>
              <PageHeader name={course.name}  number={course.number} date={date.replaceAll("-", "")}/>
              <CourseNavigation/>
            </div>
          </div>
          <div>
            <div
              className="course-content position-fixed bottom-0 end-0"
            >
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route
                  path="Assignments/:assignmentId"
                  element={<AssignmentEditor />}
                />
                <Route path="Grades" element={<h1>Grades</h1>} />
              </Routes>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
export default Courses;