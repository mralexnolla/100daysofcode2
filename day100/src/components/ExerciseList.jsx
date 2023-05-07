import React, { useEffect, useState } from 'react'
import axios from "axios";
import Table from "react-bootstrap/Table";
import Exercise from './Exercise';
import {v4 as uuid} from 'uuid'

const ExerciseList = () => {
  const [exercises, setExercises] = useState([])

  useEffect(()=>{
    const getExercises = async () =>{
        try {

          const response = await axios.get('http://localhost:3000/exercises/');
          const data = response.data

          setExercises(data);

        } catch (error) {
          console.log(error)
        }
    }

    getExercises()

  },[])

    /** this will delete data from the db */
    const deleteExercises = async (id) =>{
      const response = await axios.delete('http://localhost:3000/exercises/' + id)
      const data = response.data
      console.log("this is in deleteExercise", data)

      /** this wil delete data from the screen */
      setExercises(exercises.filter((exercise) => exercise._id !== id));  // the _id is from mongoDB
    }
    
    const execiseList = () => {
        return exercises.map((exercise, index) => (
          <Exercise key={uuid()} exercise={exercise} deleteExercise={deleteExercises} index={index}/> 
        ));
    }

    

  return (
    <div>
      <h3>Logged Exercises</h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {execiseList()}
        </tbody>
      </Table>
    </div>
  );
}

export default ExerciseList
