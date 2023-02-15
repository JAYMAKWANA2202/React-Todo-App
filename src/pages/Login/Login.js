import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Todo from "../Todo/Todo";

export default function Login() {
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e", e.target);
    const signupValue = JSON.parse(localStorage.getItem("values"));
    console.log("signupValue: ", signupValue);
    console.log("values: ", values);
    if (
      values.email === signupValue.email &&
      values.password === signupValue.password
    ) {
      alert("SUCCESS");
      history.push("/Todo");

      // return history.push("/todo");
    } else {
      alert("FAIL YOU ARE NOT VALID ");
    }
  };

  return (
    <>
      <Route>
        <div className="container">
          <h1>Login</h1>
          <div className="loginbox">
            <div className="box">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 my-3 " controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter email"
                    value={values.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button variant="primary" type="submit" className="btn">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/Todo" render={(props) => <Todo {...props} />} />
          </Switch>
        </div>
      </Route>
    </>
  );
}
