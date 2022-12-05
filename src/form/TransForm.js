import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const TransForm = () => {
  const [trans, setTrans] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTrans({
      ...trans,
      [name]: value,
    });
    console.log(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(trans);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="g-4">
        <Col md>
          <Form.Select>
            <option>Income</option>
            <option>Travel</option>
            <option>Expenses</option>
            <option>Food</option>
          </Form.Select>
        </Col>
        <Col md>
          <Form.Group>
            <Form.Control
              placeholder="Enter your transaction"
              onChange={handleOnChange}
              name="name"
            />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group>
            <Form.Control
              placeholder="Enter your Amount"
              onChange={handleOnChange}
              name="amount"
            />
          </Form.Group>
        </Col>
        <Col md>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
        </Col>
      </Row>{" "}
    </Form>
  );
};

export default TransForm;
