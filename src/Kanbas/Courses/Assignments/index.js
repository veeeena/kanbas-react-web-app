import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { BsGripVertical } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai"
import { IoEllipsisVertical } from "react-icons/io5"
import { BsPencilSquare } from "react-icons/bs"

function Assignment({name}) {
  return (
    <li class="list-group-item"> 
      <BsGripVertical />
      <BsPencilSquare className="text-success me-1"/>
      <a href="edit.html" class="text-dark"> <p class="fs-6 px-1 header-text"> <strong> {name} </strong> </p> </a>
      <IoEllipsisVertical className="ms-2 mt-1 float-end"/>
      <AiFillCheckCircle className="ms-2 mt-1 text-success float-end"/>
      <div class="ps-5"><small> 
        <span className="text-danger"> Multiple Modules </span> | 
        <strong> Due</strong> 00-00-00 | 100pts  </small></div>
    </li>
  );
}

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="me-2">
      <div className="list-group">
        <li class="list-group-item list-group-item-secondary"> 
          <BsGripVertical />
          <IoMdArrowDropdown />
          <p class="fs-6 px-1 header-text"> <strong> Assignments </strong> </p>
          <i class="text-secondary fa-solid fa-ellipsis-vertical float-end"></i>
          <i class="text-secondary px-2 fa-solid fa-plus float-end"></i>
          <IoEllipsisVertical className="float-end mx-1 mt-2"/>
          <AiOutlinePlus className="float-end ms-2 mt-2"/>
          <div class="p-1 border border-secondary rounded-pill float-end">
              <small> 40% of Total </small>
          </div>

        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          >
            <div>
              <Assignment name={assignment.title}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
