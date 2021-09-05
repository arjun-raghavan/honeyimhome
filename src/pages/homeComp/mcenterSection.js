import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ImageGallery from "react-image-gallery";
import Divider from "@material-ui/core/Divider";

import "react-image-gallery/styles/css/image-gallery.css";
import homeData from "../../data/home.json";
import heading from "../../common/assets/headingStyle1.svg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: "16px auto",
    width: "70%",
    height: "1px",
    [theme.breakpoints.up("md")]: {
      margin: "40px auto",
    },
  },
  fullWidth: {
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      // marginTop: "4px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      position: "relative",
      marginLeft: "-50vw",
      left: "50%",
    },
  },
}));

const CarouselImage = React.memo(({ item, alt }) => {
  return (
    <>
      <a href="https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos">
        <img
          className="image-gallery-image"
          src={item.original}
          alt={alt}
          target="_blank"
        ></img>
      </a>
    </>
  );
});

export default function CenterSection() {
  const classes = useStyles();
  const { monthFav, carouselImages, trendingRecipes, cooking } = homeData;

  const getImageGallerySection = () => {
    return (
      <Box className={classes.fullWidth}>
        <ImageGallery
          items={carouselImages}
          autoPlay={true}
          showBullets={true}
          showNav={false}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          slideDuration={2000}
          slideInterval={5000}
          fullscreen
          renderItem={(item) => {
            return <CarouselImage item={item} />;
          }}
        />
        <div style={{ padding: "5%" }}>
          <Typography
            variant={"h4"}
            component={"h2"}
            gutterBottom
            className={classes.mediaContainer}
          >
            {"Why Late Summer Is the Perfect Time for Decluttering"}
          </Typography>
          <img src={heading} alt="dsd" style={{ width: "30%" }}></img>
          <Typography paragraph>
            Christine Platt, aka the Afrominimalist, has a plan for taking
            stock—and letting go.
          </Typography>
        </div>
        <Divider
          variant="middle"
          orientation="horizontal"
          className={classes.divider}
        />
      </Box>
    );
  };

  return (
      <Grid item xs={12} md={6}>
        {getImageGallerySection()}
      </Grid>
  );
}
