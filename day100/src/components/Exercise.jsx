import React from 'react'
import { Link } from "react-router-dom";

const Exercise = ({ index, exercise, deleteExercise }) => {
  console.log(exercise);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date}</td>
      <td>
        <Link className="edittextcolor text-decoration-none" 
               to={"/edit/" + exercise._id}>edit</Link> &nbsp; | &nbsp;
               <button className="button " onClick={() => {deleteExercise(exercise._id)}}>delete</button>
      </td>
    </tr>
  );
};

export default Exercise
