import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  // const location = useLocation();
  // console.log("location: ", location);
  return (
    <>
      <div className="container ">
        <h1>Contact Page </h1>
        <h2>{/* {location.state.fname} {location.state.lname} */}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eaque
          dolores voluptas odit a praesentium iure voluptatibus consequatur
          commodi, repellendus, ea qui nulla delectus omnis?
        </p>
      </div>
    </>
  );
};

export default Contact;
