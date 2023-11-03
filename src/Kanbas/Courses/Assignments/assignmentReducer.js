/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  assignments: db.assignments,
  assignment: {title:"Kanbas Assignment" },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id != action.payload
      );
    },
    updateAssignment: (state, action) => {
      const existsSize = state.assignments.filter((a) => { 
        a.id === action.payload._id 
      })
      if (existsSize.length == 0) {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
        ];
      } else {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        })
      }
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;