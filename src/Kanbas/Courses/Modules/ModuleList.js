import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsGripVertical } from "react-icons/bs"
import { IoMdArrowDropright } from "react-icons/io"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} class="list-group-item list-group-item-secondary mb-3"> 
            <BsGripVertical />
            <IoMdArrowDropright />
            <p className="fs-6 px-3 py-0 my-0 header-text"> <strong> {module.name} </strong> </p>
            <p className="fs-6 px-5 py-0 my-0"> <small> {module.description}  </small> </p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;