import ModuleList from "../Modules/ModuleList";
import {IoMdArrowDropdown} from "react-icons/io";
import {FaEllipsisV} from "react-icons/fa"
import {AiOutlinePlus} from "react-icons/ai"

function Modules() {
  return (
    <div class="container-fluid">
      <div className="row">
        <div className="col-12 me-2">
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
      </div>
    </div>
  );
}
export default Modules;
