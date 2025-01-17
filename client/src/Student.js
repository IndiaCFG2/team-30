import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
} from "@material-ui/core";
import StudentHeader from "./layout/StudentHeader";
// import Header from "./layout/Header";

var firebase = require("firebase");

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 650,
  },
}));
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Student = () => {
  var db = firebase.firestore();
  const classes = useStyles();
  const [materials, setMaterials] = useState([]);
  const [classno, setClassno] = useState("");
  var mymat = [];
  useEffect(() => {
    db.collection("materials")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          mymat.push(doc.data());
        });
        setMaterials(mymat);
      });
    //eslint disable-next-line
  }, []);

  const changeTable = () => {
    console.log("change table clicked", classno);
    var temp = [];
    materials.forEach((material) => {
      if (material.classno === classno) {
        temp.push(material);
      }
    });
    setMaterials(temp);
  };

  return (
    <div>
      <StudentHeader />
      <div className="items" style={{ margin: "30px" }}>
        <Grid container>
          <Grid item xs={2}>
            <InputLabel
              style={{ marginLeft: "15px" }}
              className="label"
              id="select-label"
            >
              Class Number
            </InputLabel>
            <Select
              style={{ marginLeft: "15px", width: "100px" }}
              labelId="select-label"
              id="demo-simple-select"
              value={classno}
              onChange={async (e) => {
                setClassno(e.target.value);
              }}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
            </Select>
          </Grid>
          {/* <Grid item xs={2}>
            <InputLabel style={{ marginLeft: "15px" }} id="select-label">
              Subject
            </InputLabel>
            <Select
              style={{ marginLeft: "15px", width: "100px" }}
              labelId="select-label"
              id="demo-simple-select"
              value={subject}
              onChange={async (e) => {
                setSubject(e.target.value);
              }}
            >
              <MenuItem value={"Math"}>Math</MenuItem>
              <MenuItem value={"Science"}>Science</MenuItem>
              <MenuItem value={"History"}>History</MenuItem>
              <MenuItem value={"Geography"}>Geography</MenuItem>
              <MenuItem value={"EVS"}>EVS</MenuItem>
            </Select>
          </Grid> */}
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={async () => {
                changeTable();
              }}
            >
              Apply filter
            </Button>
          </Grid>
        </Grid>
      </div>
      <TableContainer
        component={Paper}
        style={{ width: "98%", marginLeft: "20px", marginRight: "20px" }}
      >
        <Table
          className={classes.table}
          aria-label="simple table"
          id="myTable2"
        >
          <TableHead>
            <TableRow style={{ backgroundColor: "#2034ba" }}>
              <TableCell
                id="TableCell"
                align="center"
                style={{ cursor: "pointer" }}
              >
                Topic{" "}
              </TableCell>
              <TableCell
                id="TableCell"
                align="center"
                style={{ cursor: "pointer" }}
              >
                Subject
              </TableCell>
              <TableCell
                id="TableCell"
                style={{ cursor: "pointer" }}
                align="center"
              >
                Class&nbsp;
              </TableCell>
              <TableCell
                id="TableCell"
                style={{ cursor: "pointer" }}
                align="center"
              >
                Link&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materials.map((material) => (
              <StyledTableRow key={material.fname + material.lname}>
                <TableCell component="th" scope="row" align="left">
                  {material.topic}
                </TableCell>
                <TableCell align="center">{material.subject}</TableCell>
                <TableCell align="center">{material.classno}</TableCell>
                <TableCell align="center">
                  <a href={material.link} target="__blank__">
                    {material.link.slice(0, 30)}
                  </a>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Student;
