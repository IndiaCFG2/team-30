import React, { useState } from "react";
import { Redirect } from "react-router-dom";
var firebase = require("firebase");

const AddTeacher = (props) => {
  const [state, setState] = useState({
    name: "",
    number: "",
    subject: "",
    email: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const addTeacher = async (e) => {
    e.preventDefault();
    console.log("I am here..", state);
    await firebase.firestore().collection("Teachers").add(state);
    console.log("Done adding!");
    window.location.href = "http://localhost:3000/admin/dashboard";
  };

  const { name, number, subject, email } = state;

  return (
    <div>
      <h3 className="text-center">Add Teacher</h3>
      <form style={{ paddingLeft: "20px" }} onSubmit={addTeacher}>
        <input
          type="text"
          onChange={handleChange}
          className="form-control mb-3"
          value={name}
          name="name"
          placeholder="Enter Name"
        />
        <input
          type="text"
          className="form-control mb-3"
          onChange={handleChange}
          value={number}
          name="number"
          placeholder="Enter Phone Number"
        />
        <input
          type="text"
          className="form-control mb-3"
          onChange={handleChange}
          value={subject}
          name="subject"
          placeholder="Enter Subject"
        />
        <input
          type="text"
          className="form-control mb-3"
          onChange={handleChange}
          value={email}
          name="email"
          placeholder="Enter Email"
        />
        <div className="form-group">
          <input
            type="submit"
            value="Add Teacher"
            className="btn btn-primary btn-block"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
