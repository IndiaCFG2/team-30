import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 200,
    marginTop: 200,
  },
  media: {
    marginLeft: 150,
    width: 50,
    height: 50,
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <h1
        style={{
          fontSize: "36px",
          //   marginLeft: "550px",
          position: "absolute",
          top: "100px",
          left: "580px",
        }}
      >
        Welcome to EducationON!
      </h1>
      <Grid container>
        <Grid item xs={5}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.shareicon.net/data/2015/08/06/81213_system_512x512.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Admin
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Person who manages the whole content of the application along
                  with assigning the user and also to load the data bulkly.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/adminLogin">
                <Button size="small" color="primary">
                  Admin Login
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="http://pluspng.com/img-png/png-hd-for-teachers-by-see-fetterman-teacher-1024x768-1024.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Teacher
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Person
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/teacherLogin">
                <Button size="small" color="primary">
                  Teacher Login
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
