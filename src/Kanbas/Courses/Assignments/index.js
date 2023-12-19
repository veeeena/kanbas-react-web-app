import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { BsGripVertical } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai"
import { IoEllipsisVertical } from "react-icons/io5"
import { BsPencilSquare } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
} from "./assignmentReducer";


function Assignment({name}) {
  const { courseId } = useParams();
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  return (
    <div>
      <li class="list-group-item"> 
        <BsGripVertical />
        <BsPencilSquare className="text-success me-1"/>
        <a href="edit.html" class="text-dark"> <p class="fs-6 px-1 header-text"> <strong> {name} </strong> </p> </a>
        <IoEllipsisVertical className="ms-2 mt-1 float-end"/>
        <AiFillCheckCircle className="ms-2 mt-1 text-success float-end"/>
        <div class="ps-5"><small> 
          <span className="text-danger"> Multiple Modules </span> | 
          <strong> Due</strong> 00-00-00 | 100pts  </small></div>
          <button type="button" class="btn btn-sm btn-light ms-5 me-1 my-1"
              onClick={() => dispatch(deleteAssignment(assignment._id))}>
              Delete
          </button>
          <Link
          key={assignment._id}
          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          >
            <button type="button" class="btn btn-sm btn-light my-1"
              onClick={() => dispatch(setAssignment(assignment))}>
              Edit
            </button>
          </Link>
      </li>
    </div>
  );
}

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentReducer.assignments);
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  return (
    <div className="me-2">
            <div class="d-flex mb-3">
        <div class="w-25 me-auto py-0">
            <input type="text" class="form-control" id="searchAssignments" placeholder="Search for Assignment" />
        </div>
        <div class="py-0">
            <a class="btn btn-secondary" style={{backgroundColor: "lightgray", color: "black"}} href="#" role="button">
                <AiOutlinePlus className="me-1"/>
                Group
            </a>
        </div>
        <div class="py-0 ps-1">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${new Date().getTime()}`} class="btn btn-danger" style={{color: "white"}} href="#" role="button">
                <AiOutlinePlus className="me-1" />
                Assignment
            </Link>
        </div>
        <div class="py-0 ps-1"> 
            <a class="btn btn-secondary" style={{backgroundColor: "lightgray", color: "black"}} href="#" role="button">
                <IoEllipsisVertical />                            
            </a>    
        </div>
      </div>
    <hr/>
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
        {assignments
        .filter((assignment) => assignment.course === courseId)
        .map((module, index) => (
            <div>
              <Assignment name={assignment.title}/>
            </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
