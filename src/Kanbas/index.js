import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import CourseNavigation from "./Courses/CourseNavigation";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import UserTable from "./users/table";
import Landing from "./Landing";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const API_BASE = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000/";
  const URL = `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      ...courses, response.data
    ]);
    setCourse({ name: "" })
  };

  const deleteCourse = async (course) => {
    console.log(course);
    const response = await axios.delete(
      `${URL}/${course}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course));
  };
  
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({     
      name: "New Course",      number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",  
    });
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Landing" />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="Account" element={<Account />} />
            <Route path="/Account/:id" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
            } />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />
            <Route path="Courses" element={<CourseNavigation />} />
            <Route path="/admin/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
