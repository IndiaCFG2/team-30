import React, { useState, useEffect } from "react";
import AddTeacher from "./AddTeacher";
var firebase = require("firebase");

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [submitted, setSubmitted] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("Teachers")
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type === "added") {
            console.log(change.doc.data());
            setTeachers([...teachers, change.doc.data()]);
          }
        });
        console.log(teachers);
      });
  }, [submitted]);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Admin Panel</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <AddTeacher props={setSubmitted} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-striped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Subject</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(teachers).map((id) => {
                return (
                  <tr key={id}>
                    <td>{teachers[id].Name}</td>
                    <td>{teachers[id]["Ph no"]}</td>
                    <td>{teachers[id].Subject}</td>
                    <td>{teachers[id].email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
