import React, { useRef, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
import ProgressBar from "./progressBar";
import { uploadFileToFirebaseStorage } from "./FirebaseFunctions";

var firebase = require("firebase");

const Upload = () => {
  var db = firebase.firestore();
  console.log(db);
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [classno, setClassno] = useState("");
  const [link, setLink] = useState("");

  const [fileInfo, setFileInfo] = useState("");
  const [fileSizeInKB, setFileSize] = useState(100);
  let [fileProgressPercentage, setProgress] = useState(0);
  const [uploadedFileURL, setUploadedFileURL] = useState("");
  const [showFileSizeError, setFileSizeError] = useState(false);

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

  const handleFileChange = (e) => {
    const fileDetails = e.target.files[0];
    setProgress(5);
    let fileSizeInKB = fileDetails.size / 1000;
    const maxFileSizeInKB = 5000 * 100; // Kilobyte
    if (fileSizeInKB > maxFileSizeInKB) {
      setFileSizeError((status) => !status);
      setFileSize(fileSizeInKB);
    } else {
      setFileSizeError(false);
      uploadFileToFirebaseStorage(fileDetails, (result) => {
        console.log(result);
        if (result.progress) {
          setProgress(result.progress);
          if (result.progress > 99) {
            // SetDisableNextBtn(false);
          }
          return;
        }
        if (result.url) {
          setUploadedFileURL(result.url);
          setLink(result.url);
          return;
        }
        if (result.error) {
          // Handle error
        }
      });
    }
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
        <>
          <div
            className="form-group mt-1"
            style={{
              marginLeft: "15px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <strong> Upload a file </strong>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={handleFileChange}
              name="myfile"
            />
          </div>
          <div
            className="form-group"
            style={{
              marginLeft: "20px",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            {showFileSizeError ? (
              <span className="error_message">File exceeds size limit</span>
            ) : (
              <ProgressBar progressPercentage={fileProgressPercentage} />
            )}
          </div>
        </>
        <TextValidator
          style={{ margin: "15px", width: "80%" }}
          id="link"
          label="Uploaded Link"
          variant="outlined"
          value={link}
          validators={["required"]}
          errorMessages={["this field is required"]}
          required={true}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        {/* <TextValidator
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
        /> */}
        <Button variant="contained" color="primary" type="submit">
          submit
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default Upload;
