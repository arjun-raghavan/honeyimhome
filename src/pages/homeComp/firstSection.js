import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import homeData from "../../data/home.json";

import LeftSection from './leftSection';
import RightSection from './rightSection';
import CenterSection from './mcenterSection';
import {test1, test2, test3, test5, test7} from "../../common/assets";


const RightSectionData = {
  title: 'Recipes We are loving',
  recipes: [{
    recipeName: 'Lorem Ipsum is simply dummy text',
    recipeLink: 'https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos',
    recipeImage: test5,
  },
  {
    recipeName: 'Lorem Ipsum is simply dummy text',
    recipeLink: 'https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos',
    recipeImage: test7,
  },
  {
    recipeName: 'Lorem Ipsum is simply dummy text',
    recipeLink: 'https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos',
    recipeImage: test5,
  }],
}

const LeftSectionData = {
  recipes: [{
    recipeName: 'Lorem Ipsum',
    recipeDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    recipeLink: 'https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos',
    recipeImage: test1,
  },
  {
    recipeName: 'Lorem Ipsum',
    recipeDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    recipeLink: 'https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos',
    recipeImage: test2,
  }],
}

export default function FirstSection() {
  const { monthFav, carouselImages, trendingRecipes, cooking } = homeData;
  
  return (
      <Grid container item spacing={3} justify="flex-start">
        <Box clone order={{ xs: 2, md: 1 }}>
         <LeftSection recipesData={LeftSectionData}/>
        </Box>
        <Box clone order={{ xs: 1, md: 2 }}>
          <CenterSection/>
        </Box>
        <Box clone order={3}>
          <RightSection recipesData={RightSectionData}/>
        </Box>
      </Grid>
  );
}
