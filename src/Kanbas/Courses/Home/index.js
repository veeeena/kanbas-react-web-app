import ModuleList from "../Modules/ModuleList";
import {BiImport, BiTargetLock} from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsFillBarChartFill, BsFillMegaphoneFill, BsBell, BsMegaphone } from "react-icons/bs"
import {IoMdArrowDropdown} from "react-icons/io";
import {FaEllipsisV} from "react-icons/fa"
import {AiOutlinePlus} from "react-icons/ai"
import { useParams } from "react-router-dom";
import db from "../../Database";


function StatusButton({icon, text}) {
  return (
    <button type="button" className="list-group-item list-group-item-action bg-light p-2 mb-1">
      {icon} &nbsp;
      {text}
    </button>
  );
}

function Home() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  let todos = []
  if (courseAssignments.length >= 2) {
    todos[0] = courseAssignments[0]
    todos[1] = courseAssignments[1]
  } else if (courseAssignments.length == 1) {
    todos[0] = courseAssignments[0]
  }
  return (
    <div className="row">
      <div className="col-8">
        <div className="row d-inline-block">
          <div className="col-12">
            <a className="float-end btn btn-secondary mb-3 me-1" style={{backgroundColor: "lightgray", color: "black"}} href="#" role="button">
              <FaEllipsisV className="m-1" />                            
            </a>
            <a className="float-end btn btn-danger mb-3 me-1" style={{color: "white"}} href="#" role="button">
                <AiOutlinePlus className="me-1" />
                Module
            </a>
            <a className="float-end btn btn-secondary mb-3 me-1" style={{backgroundColor: "lightgray", color: "black"}} href="#" role="button">
                Collapse All
            </a>
            <a className="float-end btn btn-secondary mb-3 me-1" style={{backgroundColor: "lightgray", color: "black"}} href="#" role="button">
                View Progress
            </a>
            <a className="float-end btn btn-secondary mb-3 me-1" style={{backgroundColor: "lightgray", color: "black"}} href="#" role="button">
                Publish All
                <IoMdArrowDropdown />
            </a>
          </div>
        </div>
        <div className="row ms-1">
          <hr /> 
          <ModuleList />
        </div>
      </div>
      <div className="col-3">
        <div class="list-group">
          <StatusButton icon={< BiImport />} text="Import Existing Content"/>
          <StatusButton icon={< BsFillArrowRightCircleFill />} text="Import from Commons"/>
          <StatusButton icon={< BiTargetLock />} text="Choose Home Page"/>
          <StatusButton icon={< BsFillBarChartFill />} text="View Course Stream"/>
          <StatusButton icon={< BsMegaphone />} text="New Announcement"/>
          <StatusButton icon={< BsFillBarChartFill />} text="New Analytics"/>
          <StatusButton icon={< BsBell />} text="Course Notifications"/>
        </div>
        <div className="mt-3">
          <strong> To Do </strong>
          <hr className="border border-dark"/>
          <div className="row mt-0">
              <div className="col-1">
                  <i className="fa-solid fa-circle-info text-danger"></i>
              </div>
              <div className="col-11">
                {todos.map((assignment) => (
                  <div>
                    <p className="text-danger mb-0"> Grade {assignment.title} </p>
                  <p className="text-secondary mb-0"> <small>100 Points • Due {assignment.dueDate}</small> </p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;