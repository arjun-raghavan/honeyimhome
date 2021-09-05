import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  monFavWrapper: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    textAlign:'center'
  },
  monFavImage: {
    maxWidth: '100%',
    // paddingBottom: '56.25%' /* 16:9 */,
        // paddingTop: 25,
        width: '100%',
  },
}));

const data =  {
  "title": "What's Cooking ?",
  "subTitle": "Sweet & Spicy Chicken",
  "description": "One Pot Dish | Quick Stir | LESS OIL",
  "buttonTitle": "View Recipe",
  "buttonLink": "",
  "youTubeId": "k1F9qTSEods" 
};

export default function MonthFavorite(props) {
  const classes = useStyles();
  const { title, subTitle, description, imageSrc, imageAltText } = data;

  const LeftSectionCard = () => (
    <CardMedia
      component="img"
      alt={imageAltText}
      image={imageSrc}
      // style={{
      //   paddingBottom: '56.25%' /* 16:9 */,
      //   paddingTop: 25,
      //   width: '100%',
      // }}
    />
  );

  return (
    <div className={classes.monFavWrapper}>
        <img alt={imageAltText} src={imageSrc} className={classes.monFavImage}/>
      <Typography
        variant="h6"
        component="h2"
        fontWeight="fontWeightBold"
        gutterBottom
      >
        {subTitle}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </div>
  );
}
