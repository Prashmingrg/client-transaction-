import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInput } from "../components/layout/CustomeInput";
import { Layout } from "../components/layout/Layout";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { postUser } from "../utility/axiosHelper";

export const Register = () => {
  const inputFields = [
    {
      label: "Name",
      placeholder: "Same Smith",
      required: true,
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
    },
  ];

  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target; //event comes from console. and name is giving a property of value like name, email, pin. hanlde on change recieve a data.
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { data } = await postUser(form);
    setResponse(data);
  };
  console.log(response);
  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2>Register</h2>
        <hr />

        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item) => (
          <CustomeInput {...item} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="text-end mt-5">
          Already have an account? <Link to="/"> Login Now </Link>
        </div>
      </Form>
    </Layout>
  );
};
