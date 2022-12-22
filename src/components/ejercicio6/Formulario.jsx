import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Formulario = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(0);

  const handleSubmit = (event) => {
    setResult(parseInt(number1) * parseInt(number2));
    event.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="w-50" onSubmit={handleSubmit}>
        <h3>Ingresar dos números para multiplicar</h3>
        <Form.Group className="mb-3" controlId="number1">
          <Form.Label>Número 1</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresar número"
            onChange={(event) => setNumber1(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="number2">
          <Form.Label>Número 2</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresar número"
            onChange={(event) => setNumber2(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <h4>El resultado es: {result}</h4>
    </div>
  );
};

export default Formulario;
