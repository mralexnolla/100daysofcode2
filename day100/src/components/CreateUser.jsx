import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'

const CreateUser = () => {
  const [users, setUsers] = useState({
    username: "",
  });

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);

    // axios.post('http://localhost:3000/users/add', users)
    // .then(res => console.log(res.data))

    try{
      const response = await axios.post('http://localhost:3000/users/add', users)
      console.log(response.data)
    }catch(err){console.log(err)}

    setUsers({ username: "" });
  };

  return (
    <div>
      <h3>Creat new Exercises Log</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            value={users.username}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
