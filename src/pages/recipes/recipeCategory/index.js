import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { AppLayout } from "../../../common";
import homeData from "../../../data/home.json";
import Heading from "../../common/heading";
import RecipeSearch from "./recipeSearch";
import CategoryIcons from "./categoryIcons";
import RecipeList from "./recipeList";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    margin: "0.3em",
    padding: "0",
  },
  divider: {
    margin: "16px auto",
    width: "70%",
    height: "1px",
    [theme.breakpoints.up("md")]: {
      margin: "40px auto",
    },
  },
}));

export default function RecipeCategory() {
  const classes = useStyles();
  const { cooking } = homeData;

  return (
    <AppLayout>
      <div className={classes.container}>
        <Heading content={"Recipes"} variant="h4" component="h2" />
        <RecipeSearch />
        <CategoryIcons />
        <RecipeList />
        <RecipeList />
      </div>
    </AppLayout>
  );
}
