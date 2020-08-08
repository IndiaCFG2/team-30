import React, { useRef, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";
import { Button } from "@material-ui/core";
let firebase = require("firebase");

const AddStudents = () => {
  let db = firebase.firestore();
  console.log(db);
  const [studentName, setTopic] = useState("");
  const [rollno, setSubject] = useState("");
  const [classno, setClassno] = useState("");
  const [phoneno, setLink] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const findMe = async () => {
    console.log("Find me clicked!");
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(showPosition);
    }

    console.log(lat);
    console.log(lon);
    var temp = await axios.get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        lon +
        "," +
        lat +
        ".json?access_token=pk.eyJ1IjoidWp3YWxrcGwiLCJhIjoiY2tkYTdvZG1kMGJlMjJybXpvaHJ0NDRieiJ9.mx5YB4-2ZKCXsLzOpC--og"
    );
    console.log("address", temp.data.features[0].place_name);
  };
  async function showPosition(position) {
    await setLat(position.coords.latitude);
    await setLon(position.coords.longitude);

    // console.log("Student is: ", students1);
  }

  const onSubmit = async () => {
    const students1 = {
      studentName: studentName,
      rollno: rollno,
      classno: classno,
      phoneno: phoneno,
    };

    // let temp = await db.collection("students").add(students1);
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
        <TextValidator
          style={{ margin: "15px", width: "80%" }}
          id="address"
          label="Address"
          variant="outlined"
          value={address}
          validators={["required"]}
          errorMessages={["this field is required"]}
          required={true}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <Button variant="contained" color="primary" onClick={findMe}>
          Locate me!
        </Button>
        <Button variant="contained" color="primary" type="submit">
          submit
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default AddStudents;
