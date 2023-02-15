import React from "react";
import Validation2 from "./Validation2";
import { useState, useEffect } from "react";
import "./signup.css";
import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";

export default function Signup() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setErrors(Validation2(values));
    // for storage data
    localStorage.setItem("values", JSON.stringify(values));
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
    <>
      <div className="container">
        <h1>SignUp</h1>
        <div className="main2">
          <form action="" onSubmit={handleSubmit}>
            <div className="data">
              <Form.Group className="signline">
                <div className="grid-container">
                  <Form.Group
                    className="mb-3 my-3"
                    controlId="formBasicFirstName"
                  >
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      placeholder="Enter FirstName"
                      value={values.firstname}
                    />
                    {errors.firstname && (
                      <p style={{ color: "red" }}>{errors.firstname}</p>
                    )}
                  </Form.Group>

                  <Form.Group
                    className="mb-3 my-3"
                    controlId="formBasicLastName"
                  >
                    <Form.Label>LastName</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                      placeholder="Enter LastName"
                      value={values.lastname}
                    />
                    {errors.lastname && (
                      <p style={{ color: "red" }}>{errors.lastname}</p>
                    )}
                  </Form.Group>
                </div>
              </Form.Group>

              <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter Email"
                  value={values.email}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </Form.Group>

              <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter password"
                  value={values.password}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </Form.Group>

              <Button variant="primary" type="submit" className="btn">
                SignUp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
