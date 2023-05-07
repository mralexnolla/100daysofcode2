import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const EditExercise = (props) => {
  const {id} = useParams()
  const [exercises, setExercises] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    //users: [],
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/exercises/${id}`);
        const data = response.data;
        setExercises({
          username: data.username,
          description: data.description,
          duration: data.duration,
          date: new Date(data.date),
          //users: data.users,
        });
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchUsers();
  }, [id]);

  const handleChange = (e) => {
    setExercises(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (date) => {
    setExercises({ ...exercises, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(exercises);

    try {
      const response = await axios.post(`http://localhost:3000/exercises/update/${id}`, exercises);
    } catch (error) {
      console.log(error);
    }

    setExercises({
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    });

    window.location = "/";
  };

  return (
    <div>
      <h3>Edit Exercises Log</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          {exercises.users ? (
            <Form.Select
              name="username"
              value={exercises.username}
              onChange={handleChange}
            >
              {exercises.users.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
            </Form.Select>
            ):(<p>Loading Users...</p>)
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={exercises.description}
            placeholder="Enter Description"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Duration (in minutes)</Form.Label>
          <Form.Control
            type="text"
            name="duration"
            value={exercises.duration}
            placeholder="Enter Duration"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date </Form.Label>
          <DatePicker selected={exercises.date} onChange={handleDateChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit Exercise Log
        </Button>
      </Form>
    </div>
  );
};

export default EditExercise;
