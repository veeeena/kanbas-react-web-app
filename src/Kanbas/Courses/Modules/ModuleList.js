import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsGripVertical } from "react-icons/bs"
import { IoMdArrowDropright } from "react-icons/io"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item mb-2">
        <input class="mx-2"
          value={module.name}
          onChange={(e) => 
            dispatch(setModule({...module, name: e.target.value }))
          } />
        <textarea cols="30" rows="3" className="align-middle"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
        <button type="button" class="btn btn-sm btn-light ms-2 me-1" onClick={() => dispatch(addModule({...module, course: courseId })) }> Add</button>
        <button type="button" class="btn btn-sm btn-light" onClick={() => dispatch(updateModule)}> Update </button>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} class="list-group-item list-group-item-secondary my-2"> 
            <BsGripVertical />
            <IoMdArrowDropright />
            <p className="fs-6 px-3 py-0 my-0 header-text"> <strong> {module.name} </strong> </p>
            <p className="fs-6 px-5 py-0 my-0"> <small> {module.description}  </small> </p>
            <button type="button" class="btn btn-sm btn-light ms-5 me-1 my-1"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <button type="button" class="btn btn-sm btn-light my-1"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;