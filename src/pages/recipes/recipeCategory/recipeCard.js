import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { test1, test8, test3, test5, test7 } from "../../../common/assets";
import {
  Switch,
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: '"Gotham SSm A", sans-serif',
  },
  image: {
    aspectRatio: "12/9",
    transform: "scale(1)",
    transition: "transform .5s",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  heading: {
    padding: "0",
    marginBottom: "8px",
  },
  text: {
    textAlign: "left",
    textTransform: "inherit",

    "&:hover": {
      color: theme.palette.text.primaryDark,
    },
  },
}));

export default function RecipeCard(props) {
  const classes = useStyles();
  const {
    data: { categoryName, categoryLink, image },
  } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <NavLink to="/">
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            src={image}
            title="Contemplative Reptile"
            className={classes.image}
          />
        </NavLink>
      </CardActionArea>
      <CardContent>
        <Button className={[classes.text, classes.heading]} color="primary">
          {categoryName}
        </Button>
        <Button
          component={NavLink}
          to={"https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos"}
          size="small"
          color="primary"
          variant="outlined"
          className={classes.text}
        >
          Watch
          {<YouTubeIcon />}
        </Button>
      </CardContent>
    </Card>
  );
}
