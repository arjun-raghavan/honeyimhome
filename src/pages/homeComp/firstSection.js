import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import CenterSection from "./mcenterSection";
import { test1, test2, test3, test5, test7 } from "../../common/assets";

const RightSectionData = {
  title: "Recipes We are loving",
  recipes: [
    {
      recipeName: "Lorem Ipsum is simply dummy text",
      recipeLink:
        "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
      recipeImage: test5,
    },
    {
      recipeName: "Lorem Ipsum is simply dummy text",
      recipeLink:
        "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
      recipeImage: test7,
    },
    {
      recipeName: "Lorem Ipsum is simply dummy text",
      recipeLink:
        "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
      recipeImage: test5,
    },
  ],
};

const LeftSectionData = {
  recipes: [
    {
      recipeName: "Lorem Ipsum",
      recipeDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      recipeLink:
        "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
      recipeImage: test1,
    },
    {
      recipeName: "Lorem Ipsum",
      recipeDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      recipeLink:
        "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
      recipeImage: test2,
    },
  ],
};


const centerSectionData = {
  title: "Why Late Summer Is the Perfect Time for Decluttering",
  description:
    "Christine Platt, aka the Afrominimalist, has a plan for taking stock—and letting go.",
  carouselImages: [
    {
      original: test1,
      recipeName: "Recipe name",
      recipeLink: "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    },
    {
      original: test2,
      recipeName: "Recipe name",
      recipeLink: "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    },
    {
      original: test3,
      recipeName: "Recipe name",
      recipeLink: "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function FirstSection() {
  const classes = useStyles();
  return (
    <Grid container item spacing={3} justify="flex-start">
      <Box clone order={{ xs: 2, md: 1 }}>
        <Grid item xs={12} md={3} className={classes.section}>
          <LeftSection recipesData={LeftSectionData} />
        </Grid>
      </Box>
      <Box clone order={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={6}>
          <CenterSection recipesData={centerSectionData} />
        </Grid>
      </Box>
      <Box clone order={3}>
        <Grid item xs={12} md={3} className={classes.section}>
          <RightSection recipesData={RightSectionData} />
        </Grid>
      </Box>
    </Grid>
  );
}
