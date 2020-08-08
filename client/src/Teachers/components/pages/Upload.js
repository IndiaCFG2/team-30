import React, { useRef, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
var firebase = require("firebase");
const Upload = () => {
  var db = firebase.firestore();
  console.log(db);
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [classno, setClassno] = useState("");
  const [link, setLink] = useState("");

  const onSubmit = async () => {
    const material1 = {
      topic: topic,
      subject: subject,
      classno: classno,
      link: link,
    };
    console.log("Material is: ", material1);
    // db.collection("materials")
    //   .add(material1)
    //   .then(function (docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //   });
    let temp = await db.collection("materials").add(material1);
    console.log("data added!!");
    // db.collection("materials")
    //   .get()
    //   .then(function (querySnapshot) {
    //     if (querySnapshot.size > 0) {
    //       // Contents of first document
    //       console.log(querySnapshot.docs[0].data());
    //     } else {
    //       console.log("No such document!");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log("Error getting document: ", error);
    //   });
  };

  return (
    <div>
      <ValidatorForm useref="form" onSubmit={onSubmit}>
        <TextValidator
          style={{ margin: "15px", width: "80%" }}
          id="topic"
          label="Topic"
          variant="outlined"
          value={topic}
          validators={["required"]}
          errorMessages={["this field is required"]}
          required={true}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        />

        <TextValidator
          style={{ margin: "15px", width: "80%" }}
          id="subject"
          label="Subject"
          variant="outlined"
          value={subject}
          required
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />

        <TextValidator
          style={{ margin: "15px", width: "80%" }}
          id="class"
          label="Class"
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
          id="link"
          label="Link"
          variant="outlined"
          value={link}
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
};

export default Upload;
