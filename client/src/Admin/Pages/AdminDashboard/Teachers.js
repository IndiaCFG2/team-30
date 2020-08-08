import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
var firebase = require("firebase");

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Teachers")
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        let teachers_list = [];
        changes.forEach((change) => {
          if (change.type === "added") {
            teachers_list.push(change.doc.data());
          }
        });
        setTeachers(teachers_list);
      });
  }, []);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Admin Panel</h1>
        </div>
      </div>
      <Link to="/admin/addTeacher">
        <button className="btn btn-primary mb-3 ml-4">Add Teacher</button>
      </Link>
      <div className="row">
        <table className="table table-borderless table-striped ml-5 mr-5">
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
                  <td>{teachers[id].name}</td>
                  <td>{teachers[id].number}</td>
                  <td>{teachers[id].subject}</td>
                  <td>{teachers[id].email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
