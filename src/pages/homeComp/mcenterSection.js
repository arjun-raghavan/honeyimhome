import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { makeStyles } from "@material-ui/core/styles";
import ImageGallery from "react-image-gallery";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

import Heading from "./heading";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: "0 auto 4px auto",
    width: "45%",
    height: "1px",
  },
  textContainer: {
    padding: "5%",
  },
  textDesc: {
    padding: "0 16px",
  },
  fullWidth: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      position: "relative",
      marginLeft: "-50vw",
      left: "50%",
    },
  },
}));

const CarouselImage = React.memo(
  ({ item, item: { recipeName, recipeLink } }) => {
    return (
      <>
        <a href={recipeLink} target="_blank" rel="noreferrer">
          <img
            className="image-gallery-image"
            src={item.original}
            alt={recipeName}
          ></img>
        </a>
      </>
    );
  }
);

export default function CenterSection(props) {
  const classes = useStyles();
  const {
    recipesData: { carouselImages, title, description },
  } = props;

  return (
    <div className={classes.fullWidth}>
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
      <div className={classes.textContainer}>
        <Heading
          content={title}
          variant="h4"
          component="h2"
          headingType="primary"
        />
        <Typography paragraph className={classes.textDesc}>
          {description}
        </Typography>
      </div>
      <Divider
        variant="middle"
        orientation="horizontal"
        className={classes.divider}
      />
    </div>
  );
}
