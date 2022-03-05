import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { test1, test8, test3, test5, test7 } from "../../../common/assets";
import Typography from "@material-ui/core/Typography";

const CategoryIconsData = [
  {
    categoryName: "All",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test1,
  },
  {
    categoryName: "Cake",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test8,
  },
  {
    categoryName: "Breakfast",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test1,
  },
  {
    categoryName: "Lunch",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test8,
  },
  {
    categoryName: "Dinner",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test8,
  },
  {
    categoryName: "Snacks",
    categoryLink:
      "https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos",
    image: test8,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  heading: {
    margin: "0.3em",
    padding: "0",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    margin: "10px",
  },
  iconDesc: {
    fontFamily: '"Gotham SSm A", sans-serif',
    fontWeight: "700",
  },
}));

function CategoryIcon(props) {
  const classes = useStyles();
  const {
    data: { categoryName, categoryLink, image },
  } = props;

  return (
    <div className={classes.iconContainer}>
      <a
        className="recipe-link"
        href={categoryLink}
        rel="noreferrer"
        target="_blank"
      >
        <img className={classes.icon} src={image} alt={categoryName}></img>
      </a>
      <Typography
        color="textSecondary"
        className={classes.iconDesc}
        gutterBottom
      >
        {categoryName}
      </Typography>
    </div>
  );
}

export default function CategoryIcons() {
  const classes = useStyles();
  const categories = CategoryIconsData;
  return (
    <div className={classes.container}>
      {categories.map((category) => (
        <CategoryIcon data={category} />
      ))}
    </div>
  );
}
