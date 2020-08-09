import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
var firebase = require("firebase");

export default function Teachers(props) {
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

  const deleteTeacher = async (email) => {
    var id = "";
    await firebase
      .firestore()
      .collection("Teachers")
      .where("email", "==", "sathvikbk123@gmail.com")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(async function (doc) {
          // doc.data() is never undefined for query doc snapshots
          id = doc.id;
        });
      });
    firebase
      .firestore()
      .collection("Teachers")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Teacher Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = "/admin/dashboard";
  };

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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(teachers).map((id) => {
              return (
                <tr key={id}>
                  <td>{teachers[id].Name || teachers[id].name}</td>
                  <td>{teachers[id]["Ph no"] || teachers[id].number}</td>
                  <td>{teachers[id].Subject || teachers[id].subject}</td>
                  <td>{teachers[id].email}</td>
                  <td>
                    <Link to="/admin/editTeacher" className="btn btn-primary">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteTeacher(teachers[id].email);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
