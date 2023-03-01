import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Todo from "./pages/Todo/Todo";
import Welcome from "./components/Welcome/Welcome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup2 from "./pages/Signup/Signup2";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./utils/firebase";
import { collection, getDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "./utils/firebase";

export default function Router() {
  const auth = getAuth(app);
  const usersCollectionRef = collection(db, "todos");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userId = user.uid;
        const userRef = doc(db, "todos", userId);
        getDoc(userRef)
          .then((doc) => {
            if (doc.exists()) {
              const userData = doc.data();
            }
          })
          .catch((error) => {
            console.log("Error getting user data:", error);
          });
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return unsubscribe;
  }, [auth]);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home ">
          <Home />
        </Route>
        {/* <Route path="/about/:fname/:lname"> */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/Signup2">
          <Signup2 />
        </Route>

        <PrivateRoute
          path="/todo"
          component={Todo}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </div>
  );
}
