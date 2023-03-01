import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { Redirect, useHistory } from "react-router-dom";
import { app, db } from "../../utils/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { where } from "firebase/firestore";

export default function Login() {
  const history = useHistory();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleGoogleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then(async (res) => {
        console.log("res: ", res);
        if (auth.currentUser) {
          history.push("/todo");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async () => {
        console.log("welcome");
        if (signInWithEmailAndPassword) {
          history.push("/todo");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="loginbox">
          <h1>Login</h1>
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
              <Button onClick={handleGoogleSignIn} className="btn mx-2">
                Sign in with Google
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
