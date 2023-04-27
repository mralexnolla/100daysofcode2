import React from "react";
import "../styles/RegisterStyles.css";
import { Button, Form, Input, message } from "antd";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post('/api/v1/user/register', values)
      if(res.data.success){
        message.success('Register Successfully!')
        navigate('/login')
      }else{
        message.errors(res.data.message);
      }
    } catch (error) {
      console.log(error)
      message.error('Something went wrong')
    }
  };

  return (
    <div>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already a user loging here{" "}
          </Link>
          <Button className="btn btn-primary" htmlType="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
