import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";

import { AppLayout } from "../../../common";
import homeData from "../../../data/home.json";
import Heading from "../../common/heading";
import RecipeSearch from "./recipeSearch";
import { test1, test8, test3, test5, test7 } from "../../../common/assets";
import Typography from "@material-ui/core/Typography";
import RecipeCard from "./recipeCard";

const CategoryIconsData = [
  {
    categoryName: "Really Easy Roasted Pepper Soup",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test1,
  },
  {
    categoryName: "Acorn Squash & Tepary Bean Soup",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test8,
  },
  {
    categoryName: "Potato-Leek Soup With Spiced Chickpeas",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test1,
  },
  {
    categoryName: "Potato-Leek Soup With Spiced Chickpeas",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test1,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    "& .category-name": {
      fontFamily: '"Chronicle SSm A", serif',
      fontWeight: "500",
    },

    "& .category-desc": {
      fontFamily: '"Chronicle SSm A", serif',
      fontWeight: "400",
      fontSize: "24px",
    },
  },
  listContainer: {
    display: "grid",
    grid: "max-content / auto",
    gap: "16px",
    marginBottom: "32px",
    [theme.breakpoints.up("sm")]: {
      grid: "max-content / auto auto auto",
    },
    [theme.breakpoints.up("md")]: {
      grid: "max-content / auto auto auto auto",
    },
    [theme.breakpoints.only("sm")]: {
      "& > div:last-child": {
        display: "none",
      },
    },
  },
}));

export default function RecipeList() {
  const classes = useStyles();
  const categories = CategoryIconsData;
  return (
    <div className={classes.container}>
      <Typography
        gutterBottom
        variant="h4"
        component="h3"
        className="category-name"
      >
        {"Desserts"}
      </Typography>
      <Typography gutterBottom className="category-desc" variant="body2">
        {"Highly slurpable dishes for winter's coldest days."}
      </Typography>

      <div
        // className={("sas", classes.listContainer)}
        className={clsx("sas", classes.listContainer)}
      >
        {categories.map((category) => (
          <RecipeCard data={category} />
        ))}
      </div>
    </div>
  );
}
