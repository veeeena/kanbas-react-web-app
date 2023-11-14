import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsGripVertical } from "react-icons/bs"
import { IoMdArrowDropright } from "react-icons/io"
import { useSelector, useDispatch } from "react-redux";
import {
  setModules,
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import * as client from "./client"

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
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
        <button type="button" class="btn btn-sm btn-light ms-2 me-1" onClick={handleAddModule}> Add</button>
        <button type="button" class="btn btn-sm btn-light" onClick={handleUpdateModule}> Update </button>
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
              onClick={() => handleDeleteModule(module._id)}>
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