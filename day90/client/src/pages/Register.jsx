import React from "react";
import { Button, Form, Input } from 'antd';


const Register = () => {

    const onfinishHandler = (values) => {
        console.log(values)
    }

  return (
    <div>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler}>
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Button className="btn btn-primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
