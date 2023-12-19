import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function DashboardCourse({ courseName, courseNumber, startDate}) {

  return (
      <div class="card bg-white p-0 m-2" style={{width: 16 + "rem"}}>
          <img src={require('../images/course-img.png')} class="card-img"/>
          <div class="card-img-overlay">
              <i class="fa-solid fa-ellipsis-vertical fa-xl text-white float-end my-3"></i>
          </div>
          <p class="px-2 pt-1 mb-0 pb-0 card-title text-success"> {courseNumber} {courseName} </p>
          <p class="fs-5 px-2 mb-0 pb-0 card-text text-secondary"> {courseNumber}.{startDate} </p>
          <p class="px-2 pb-2 card-text text-secondary"> <small>Fall 2023 Semester Full Term</small></p>
      </div>
  );
}

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2> Published Courses ({courses.length}) </h2>
      <div class="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item">
            <DashboardCourse courseName={course.name} courseNumber={course.number} startDate={course.startDate}/> 
            <button type="button" class="btn btn-sm btn-light mx-2"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>                  
            <button type="button" class="btn btn-sm btn-light mx-2"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
          </Link>
        ))}
      </div>
      <br />
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>
    </div>
  );

}
export default Dashboard;
