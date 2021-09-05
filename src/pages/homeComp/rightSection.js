import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

import Heading from "./heading";

const useStyles = makeStyles((theme) => ({
  rightSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  recipeCardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",

    [theme.breakpoints.only("sm")]: {
      flexDirection: "row",
      gap: "16px",
      alignItems: "flex-start",
    },
  },
  recipeCard: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    justifyContent: "space-around",

    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
    },

    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },

    "& .recipe-link": {
      display: "contents",
    },

    "& .recipe-image": {
      width: "45%",
      aspectRatio: "16/9",

      [theme.breakpoints.up("sm")]: {
        width: "100%",
        maxWidth: "290px",
      },
    },

    "& .recipe-desc": {
      fontWeight: "400",
      fontFamily: '"Gotham SSm A", sans-serif',
      fontSize: "16px",
      lineHeight: "23px",
      width: "42%",
      [theme.breakpoints.up("sm")]: {
        width: "80%",
      },
    },
  },
  divider: {
    display: 'none',
    width: "60%",
    height: "1px",
    [theme.breakpoints.up("md")]: {
      margin: '0 auto 12px auto',
      display: 'block',
    },
  },
  sectionDivider: {
    display: "block",
    width: "45%",
    margin: '16px auto',
    height: "1px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const RecipeCard = (props) => {
  const classes = useStyles();
  const { recipeName, recipeLink, recipeImage } = props;

  return (
    <>
      <div className={classes.recipeCard}>
        <a
          className="recipe-link"
          href={recipeLink}
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="recipe-image"
            src={recipeImage}
            alt={recipeName}
          ></img>
        </a>
        <Typography component={"h2"} className="recipe-desc" gutterBottom>
          {recipeName}
        </Typography>
      </div>
      <Divider
        variant="middle"
        orientation="horizontal"
        className={classes.divider}
      />
    </>
  );
};

export default function RightSection(props) {
  const classes = useStyles();
  const { recipesData: {title = '', recipes = []} } = props;

  return (
    <>
      <Heading
        content={title}
        variant="h6"
        component="h3"
        fontStyle="italic"
        headingType='secondary'
        style={{ lineHeight: "21px"}}
      />
      <div className={classes.recipeCardContainer}>
        {recipes.map((recipe, index) => {
          return <RecipeCard {...recipe} key={index}/>;
        })}
      </div>
      <Divider
        variant="middle"
        orientation="horizontal"
        className={classes.sectionDivider}
      />
      </>
  );
}
