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

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: '16px auto',
    width: '70%',
    height: '1px',
    [theme.breakpoints.up('md')]: {
      margin: '40px auto',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const isDesktop = useDesktop();
  const { monthFav, carouselImages, trendingRecipes, cooking } = homeData;
  return (
    <AppLayout>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid container item spacing={4} justify='flex-start'>
            <Box clone order={{ xs: 2, md: 1 }}>
              <Grid item xs={12} lg={3}>
                <ImageWithInfo data={monthFav} />
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, md: 2 }}>
              <Grid item xs={12} lg={6}>
                <Box mt={isDesktop ? 8 : 0}>
                  <ImageGallery
                    items={carouselImages}
                    autoPlay={true}
                    showBullets={true}
                    showNav={false}
                    showThumbnails={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    fullscreen
                  />
                </Box>
              </Grid>
            </Box>
            <Box clone order={3}>
              <Grid item xs={12} lg={3}>
                <MediaCardList data={trendingRecipes} />
              </Grid>
            </Box>
          </Grid>
          <Divider
            variant='middle'
            orientation='horizontal'
            className={classes.divider}
          />
          <Grid container item>
            <Grid item xs={12}>
              <YouTubeCard data={cooking} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
}
