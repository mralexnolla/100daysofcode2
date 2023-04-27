import React from 'react'
import "../styles/RegisterStyles.css";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {

  const onfinishHandler = (values) => {
  console.log(values);
  };


  return (
    <div>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Login Form</h3>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register" className="m-2">
            Not a user register here{" "}
          </Link>
          <Button className="btn btn-primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login
