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
    marginLeft: 50,
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
          // marginLeft: "550px",
          position: "absolute",
          top: "100px",
          left: "500px",
        }}
      >
        Welcome to EducationON!
      </h1>
      <Grid container>
        <Grid item xs={4}>
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
                  The one who manages everything. <br />
                  <br />
                  <br />
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
        <Grid item xs={4}>
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
                  The one who inspires, motivates, encourages and educates
                  learners. <br />
                  <br />
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
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://th.bing.com/th/id/OIP.QDsRU5IRp9lnaNxIYgnxlAHaGv?pid=Api&rs=1"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Student
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The one who always thrives to improve himself under the
                  guidance of an Instructor. <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/students">
                <Button size="small" color="primary">
                  Access Content Here
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
