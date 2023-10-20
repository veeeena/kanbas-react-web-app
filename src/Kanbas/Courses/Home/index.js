import ModuleList from "../Modules/ModuleList";
import {BiImport, BiTargetLock} from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsFillBarChartFill, BsFillMegaphoneFill, BsBell, BsMegaphone } from "react-icons/bs"
import {IoMdArrowDropdown} from "react-icons/io";
import {FaEllipsisV} from "react-icons/fa"
import {AiOutlinePlus} from "react-icons/ai"


function StatusButton({icon, text}) {
  return (
    <button type="button" className="list-group-item list-group-item-action bg-light p-2 mb-1">
      {icon} &nbsp;
      {text}
    </button>
  );
}

function Home() {
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
                  <p className="text-danger mb-0"> Grade A1 - rockets </p>
                  <p className="text-secondary mb-0"> <small>100 Points • Sep 18 at 11:59pm</small> </p>
                  <p className="text-danger mb-0"> Grade A2 - rockets2 </p>
                  <p className="text-secondary"> <small>100 Points • Sep 21 at 11:59pm</small> </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;