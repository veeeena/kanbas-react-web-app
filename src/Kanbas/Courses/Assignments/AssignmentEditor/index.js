import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { AiFillCheckCircle } from "react-icons/ai"
import { IoEllipsisVertical } from "react-icons/io5"

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const params = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="d-flex justify-content-end">
            <div class="p-2">
                <AiFillCheckCircle className="text-success me-1" />
                <div class="header-text text-success"> Published </div>
            </div>
            <div class="p-1"> 
                <a class="btn btn-secondary" style={{backgroundColor: "lightgray", color: "black"}} href="#" role="button">
                  <IoEllipsisVertical />                            
                </a>    
            </div>
        </div>
      </div>
      <hr />
      <div>
        <label for="assName" class="form-label"> Assignment Name </label>
        <input value={assignment.title} className="form-control mb-2" />
      </div>
      <hr />
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger"
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
