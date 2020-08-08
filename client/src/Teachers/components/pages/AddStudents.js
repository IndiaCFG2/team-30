import React, { useRef, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Header from "../../../layout/Header";

import {
  InputLabel,
  MenuItem,
  Select,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  TableSortLabel,
  Grid,
  position,
  Typography,
  Link,
  Avatar,
  CssBaseline,
  FormControlLabel,
  Container,
  TextField,
} from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let firebase = require("firebase");

const AddStudents = () => {
  let db = firebase.firestore();
  console.log(db);
  const classes = useStyles();
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
      await navigator.geolocation.getCurrentPosition(await showPosition);
    }
  };
  async function showPosition(position) {
    await setLat(position.coords.latitude);
    await setLon(position.coords.longitude);

    console.log(lat);
    console.log(lon);
    var temp = await axios.get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        lon +
        "," +
        lat +
        ".json?access_token=pk.eyJ1IjoidWp3YWxrcGwiLCJhIjoiY2tkYTdvZG1kMGJlMjJybXpvaHJ0NDRieiJ9.mx5YB4-2ZKCXsLzOpC--og"
    );
    if (temp.data.features[0]) {
      console.log("address", temp.data.features[0].place_name);
      setAddress(temp.data.features[0].place_name);
    }
  }

  const onSubmit = async () => {
    const students1 = {
      studentName: studentName,
      rollno: rollno,
      classno: classno,
      phoneno: phoneno,
      schoolName: schoolName,
      address: address,
    };

    let temp = await db.collection("students").add(students1);
    console.log("data added!!");
  };

  return (
    <div>
      <Header headerTitle={"LEND A HAND"} />
      <container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>

          <ValidatorForm useref="form" onSubmit={onSubmit}>
            <TextValidator
              style={{ margin: "15px", width: "80%" }}
              id="studentName"
              margin="normal"
              autoFocus
              label="Student Name"
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
              label="Roll Number"
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
              label="Class Number"
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
              label="Phone Number"
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
              id="school"
              label="School Name"
              variant="outlined"
              value={schoolName}
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
            &nbsp;&nbsp;
            <Button variant="contained" color="primary" type="submit">
              submit
            </Button>
          </ValidatorForm>
        </div>
      </container>
    </div>
  );
};

export default AddStudents;
