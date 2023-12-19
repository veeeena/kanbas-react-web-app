import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { AiFillCheckCircle, AiOutlineCalendar } from "react-icons/ai"
import { IoEllipsisVertical } from "react-icons/io5"
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateAssignment,
} from "../assignmentReducer";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  let assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div class="container-fluid content">
      <div class="row">
        <div class="d-flex justify-content-end">
            <div class="px-2 pt-0">
                <AiFillCheckCircle className="text-success me-1" />
                <div class="header-text text-success"> Published </div>
            </div>
            <div class="px-1 pt-0"> 
                <a class="btn btn-secondary" style={{backgroundColor: "lightgray", color: "black"}} href="#" role="button">
                  <IoEllipsisVertical />                            
                </a>    
            </div>
        </div>
      </div>
      <hr />
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
        <input type="text" class="form-control" value={assignment.title}/>
      </div>
      <div class="input-group input-group-sm mb-3">
        <textarea type="text" class="form-control" value={assignment.description}/>
      </div>
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Points</span>
        <input type="text" class="form-control" value="100"/>
      </div>
      <p class="fs-5 mb-1" id=""> Assign</p>
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Due</span>
        <input type="text" class="form-control" value={assignment.dueDate}/>
      </div>
      <div class="row">
        <div class="col-6">
          <p class="pb-0 mb-0" id=""> Available From Date</p>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="addon-wrapping">
              <AiOutlineCalendar />
            </span>
            <input type="text" class="form-control" value={assignment.availableFromDate}/>
          </div>
        </div>
        <div class="col-6">
          <p class="pb-0 mb-0" id=""> Available Until Date</p>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="addon-wrapping">
              <AiOutlineCalendar />
            </span>
            <input type="text" class="form-control" value={assignment.availableUntilDate}/>
          </div>
        </div>
      </div>
      <hr />
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger"
      >
        Cancel
      </Link>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
        <button onClick={() => dispatch(updateAssignment({...assignment, course: courseId })) } className="btn btn-success me-2">
          Save
        </button>
      </Link>
    </div>
  );
}

export default AssignmentEditor;
