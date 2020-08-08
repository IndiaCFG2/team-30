import React, { useRef, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
let firebase = require("firebase");

const AddStudents = () => {
    let db = firebase.firestore();
  console.log(db);
  const [studentName, setTopic] = useState("");
  const [rollno, setSubject] = useState("");
  const [classno, setClassno] = useState("");
  const [phoneno, setLink] = useState("");

  const onSubmit = async () => {
    const students1 = {
      studentName: studentName,
      rollno: rollno,
      classno: classno,
      phoneno: phoneno,
    };
    console.log("Material is: ", students1);

    let temp = await db.collection("students").add(students1);
    console.log("data added!!");
    
  };
  return (
    <div>
      <ValidatorForm useref="form" onSubmit={onSubmit}>
        <TextValidator
          style={{ margin: "15px", width: "80%" }}
          id="studentName"
          label="studentName"
          variant="outlined"
          value={studentName}
          validators={["required"]}
          errorMessages={["this field is required"]}
          required={true}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        />

        <TextValidator
          style={{ margin: "15px", width: "80%" }}
          id="rollno"
          label="rollno"
          variant="outlined"
          value={rollno}
          required
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />

        <TextValidator
          style={{ margin: "15px", width: "80%" }}
          id="classno"
          label="classno"
          variant="outlined"
          value={classno}
          validators={["required"]}
          errorMessages={["this field is required"]}
          required={true}
          onChange={(e) => {
            setClassno(e.target.value);
          }}
        />
        <TextValidator
          style={{ margin: "15px", width: "80%" }}
          id="phoneno"
          label="phoneno"
          variant="outlined"
          value={phoneno}
          validators={["required"]}
          errorMessages={["this field is required"]}
          required={true}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          submit
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default AddStudents;
