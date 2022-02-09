/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import Divider from '@material-ui/core/Divider';

import {
  CursiveHeading,
  ImageWithInfo,
  MediaCard,
  MediaCardList,
  AppLayout,
} from '../common';
import 'react-image-gallery/styles/css/image-gallery.css';
import YouTubeCard from '../common/components/youTube/youTubeCard';
import homeData from '../data/home.json';
import { useDesktop } from '../common/utils/mediaQuery';
import RecipeCard from '../common/components/youTube/recipeCard';
import recipeData from '../data/recipes.json';

const useStyles = makeStyles((theme) => ({}));

export default function Recipes() {
  const classes = useStyles();
  const isDesktop = useDesktop();
  const { sections } = recipeData;
  return (
    <AppLayout>
      {sections.map((section) => {
        const { title, cards } = section;
        return (
          <Grid container justify='flex-start' spacing={3}>
            {cards.map((card) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <RecipeCard data={cards} />
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </AppLayout>
  );
}
