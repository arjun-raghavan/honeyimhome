import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  leftSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  recipeCardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",

    [theme.breakpoints.only("sm")]: {
      flexDirection: "row",
      gap: "16px",
      alignItems: "flex-start",
    },
  },
  recipeCard: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    maxWidth: "290px",

    "& .recipe-image-link": {
      display: "contents",
    },

    "& .recipe-link": {
      textDecoration: "none",
      color: theme.palette.text.primary,
      fontWeight: "bold",
    },

    "& .recipe-image": {
      width: "100%",
      marginBottom: "8px",
    },

    "& .recipe-name": {
      fontWeight: "400",
      fontFamily: '"Gotham SSm A", sans-serif',
      fontSize: "16px",
      lineHeight: "23px",
      width: "42%",
      [theme.breakpoints.up("sm")]: {
        width: "80%",
      },
    },

    '& .recipe-desc': {
      fontFamily: '"Chronicle SSm A", serif',
      lineHeight: '23px',
    }
  },
  divider: {
    display: "none",
    width: "60%",
    height: "1px",
    [theme.breakpoints.up("md")]: {
      margin: "0 auto 12px auto",
      display: "block",
    },
  },
}));

const RecipeCard = (props) => {
  const classes = useStyles();
  const { recipeName, recipeLink, recipeImage, recipeDesc } = props;

  return (
    <>
      <div className={classes.recipeCard}>
        <a
          className="recipe-image-link"
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
        <Typography component={"h2"} className="recipe-name" gutterBottom>
          <a
            className="recipe-link"
            href={recipeLink}
            rel="noreferrer"
            target="_blank"
          >
            {recipeName}
          </a>
        </Typography>
        <Typography  paragraph={true} className="recipe-desc" gutterBottom>
          {recipeDesc}
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

export default function LeftSection(props) {
  const classes = useStyles();
  const {
    recipesData: { recipes = [] },
  } = props;

  return (
    <Grid item xs={12} md={3} className={classes.leftSection}>
      <div className={classes.recipeCardContainer}>
        {recipes.map((recipe) => {
          return <RecipeCard {...recipe} />;
        })}
      </div>
    </Grid>
  );
}
