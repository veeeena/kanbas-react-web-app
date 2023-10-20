import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import PageHeader from "../PageHeader/PageHeader";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div>
              <PageHeader name={course.name}  number={course.number} date={course.startDate.replaceAll("-", "")}/>
              <CourseNavigation/>
            </div>
          </div>
          <div>
            <div
              className="position-fixed bottom-0 end-0"
              style={{
                left: "320px",
                top: "50px",
              }}
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
