import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import YouTube from "../../common/components/youTube/youTube";
import Heading from "../common/heading";
import { Button } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "42px",
    paddingBottom: "34px",
    textAlign: "left",

    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
    },

    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      padding: "40px",
    },

    "& .see-all": {
      textDecoration: "none",
      color: theme.palette.primary.main,
      display: "block",
      fontWeight: "bold",
      margin: "16px 0",
    },
  },
  content: {
    color: theme.palette.text.default,

    [theme.breakpoints.only("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0 15%",
    },

    "& .recipe-name": {
      fontFamily: '"Chronicle SSm A", serif',
    },
    "& .recipe-btn": {
      marginBottom: "16px",
    },
  },
}));

const SeeAllButton = (props) => {
  const { content, link } = props;
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="see-all"
    >
      {content}
    </a>
  );
};

export default function YouTubePlayer(props) {
  const classes = useStyles();
  const {
    recipeData: {
      heading,
      title,
      description,
      buttonTitle,
      buttonLink,
      allRecipesLink,
      allRecipesContent,
      youTubeId,
    },
  } = props;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Heading
          content={heading}
          variant="h6"
          component="h3"
          headingType="tertiary"
          style={{
            lineHeight: "21px",
            backgroundSize: "40% 15px",
            width: "fit-content",
          }}
        />
        <Typography
          variant="h5"
          component="h2"
          className="recipe-name"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography paragraph className="recipe-desc" gutterBottom>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          mb={1}
          className="recipe-btn"
          component={NavLink}
          to={buttonLink}
        >
         {buttonTitle}
        </Button>
        <Hidden only={["sm", "xs"]}>
          <SeeAllButton content={allRecipesContent} link={allRecipesLink}/>
        </Hidden>
      </div>
      <YouTube youTubeId={youTubeId} width="50%" />
      <Hidden only={["md", "lg", "xl"]}>
      <SeeAllButton content={allRecipesContent} link={allRecipesLink}/>
      </Hidden>
    </div>
  );
}
