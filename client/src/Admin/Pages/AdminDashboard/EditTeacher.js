import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
var firebase = require("firebase");

const EditTeacher = (props) => {
  const [state, setState] = useState({
    name: "",
    number: "",
    subject: "",
    email: "",
  });
  const [phno, setPhno] = useState("");
  const [id, setId] = useState("");
  var db = firebase.firestore();

  useEffect(() => {
    let temp = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        //console.log(user.phoneNumber);
        var userno = user.phoneNumber;
        userno = userno.slice(3);
        setPhno(userno);
        console.log("fetUser function: " + userno);
        db.collection("Teachers")
          .where("number", "==", userno)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(async function (doc) {
              // doc.data() is never undefined for query doc snapshots
              await setId(doc.id);
              console.log(doc.id, " => ", doc.data());
              var teacher = {
                name: doc.data().name,
                number: doc.data().number,
                subject: doc.data().subject,
                email: doc.data().email,
              };
              setState(teacher);
            });
          });
      }
    });
  }, []);

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
    await firebase.firestore().collection("Teachers").doc(id).update(state);
    console.log("Done adding!");
    window.location.href = "http://localhost:3000/admin/dashboard";
  };

  const { name, number, subject, email } = state;

  return (
    <div>
      <h3 className="text-center">Update Teacher Info</h3>
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
            value="Update Teacher"
            className="btn btn-primary btn-block"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default EditTeacher;
