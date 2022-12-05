import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const intialState = {
  type: "",
  name: "",
  Amount: "",
};

export const TransForm = () => {
  const [trans, setTrans] = useState(intialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTrans({
      ...trans,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(trans);

    setTrans(intialState);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="g-4">
        <Col md="2">
          <Form.Select
            defaultValue="Choose..."
            name="type"
            required
            onChange={handleOnChange}
            value={trans.type}
          >
            <option>choose...</option>
            <option>Income</option>

            <option>Expenses</option>
          </Form.Select>
        </Col>
        <Col md="5">
          <Form.Group>
            <Form.Control
              placeholder="Enter your transaction"
              onChange={handleOnChange}
              name="name"
              required
              value={trans.name}
            />
          </Form.Group>
        </Col>
        <Col md="2">
          <Form.Group>
            <Form.Control
              placeholder="Amount"
              onChange={handleOnChange}
              name="Amount"
              required
              value={trans.Amount}
            />
          </Form.Group>
        </Col>
        <Col md="1">
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default TransForm;
