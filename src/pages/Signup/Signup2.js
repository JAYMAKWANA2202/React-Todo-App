import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Validation2 from "./Validation2";
import "./Signup2.css";
import { logInWithEmailAndPassword } from "../../utils/firebase";

export default function Signup() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setErrors(Validation2(values));
    // for storage data
    if (
      Object.keys(errors).length === 0 &&
      values.password === values.confirmpassword
    ) {
      // localStorage.setItem("values", JSON.stringify(values));
      logInWithEmailAndPassword(values.email, values.password);
    }
  }

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.firstname !== "" &&
      values.lastname !== "" &&
      values.email !== "" &&
      values.password !== ""
    ) {
      alert("Your Form is Submitted");
    }
  }, [errors]);

  return (
    <div className="container">
      <div className="sign-form">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          <div className="name-fields">
            <Form.Group controlId="formBasicFirstName">
              <Form.Label className="my-2">First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                onChange={handleChange}
                placeholder="Enter First Name"
                value={values.firstname}
                autoComplete="off"
              />
              {errors.firstname && (
                <p style={{ color: "red" }}>{errors.firstname}</p>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicLastName" className="lastname">
              <Form.Label className="my-2">Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                onChange={handleChange}
                placeholder="Enter Last Name"
                value={values.lastname}
                autoComplete="off"
              />
              {errors.lastname && (
                <p style={{ color: "red" }}>{errors.lastname}</p>
              )}
            </Form.Group>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="my-2">Email Address:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
              value={values.email}
              autoComplete="off"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="my-2">Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              value={values.password}
              autoComplete="off"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="my-2">Confirm passwords:</Form.Label>
            <Form.Control
              type="password"
              name="confirmpassword"
              onChange={handleChange}
              placeholder="Confirm Password"
              value={values.confirmpassword}
              autoComplete="off"
            />
            {errors.confirmpassword && (
              <p style={{ color: "red" }}>{errors.confirmpassword}</p>
            )}
          </Form.Group>
          <Button variant="primary" type="submit" className="btn mt-3">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}
