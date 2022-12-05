import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInput } from "../components/layout/CustomeInput";
import { Layout } from "../components/layout/Layout";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { loginUser } from "../utility/axiosHelper";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "rpas@gmail.com",
    pin: 1234,
  });
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value, //convert the value of name and pin we use square bracket.
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { data } = await loginUser(form);
    setResponse(data);

    if (data.status === "success") {
      navigate("/dashboard");

      sessionStorage.setItem("user", JSON.stringify(data.user));
    }
  };

  const inputFields = [
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
      value: form.email,
    },
    {
      label: "pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      value: form.pin,
    },
  ];

  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2>Welcome Back! Login</h2>
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
          Login
        </Button>

        <div className="text-end">
          New here? <Link to="/register"> register </Link>
        </div>
      </Form>
    </Layout>
  );
};
