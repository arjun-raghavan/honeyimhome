import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import LeftSectionCard from "./leftSectionCard";

const monthFavData = {
  title: "Favorite of the Month",
  subTitle: "Chocolate Cheesecake",
  description:
    "No bake, No gelatin, eggless, without spring form pam, No bake, No gelatin, eggless, without spring form pam",
  imageSrc:
    "https://maryzkitchen.com/wp-content/uploads/2020/06/101887999_3074414372602163_3232137033983983616_n.jpg",
  imageAltText: "Chocolate CheeseCake",
};

const useStyles = makeStyles((theme) => ({
  leftSection: {
    margin: "12px 10%",
    [theme.breakpoints.up("sm")]: {
      margin: "0",
      display: "flex",
      gap: "16px",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

export default function LeftSection() {
  const classes = useStyles();
  const { monthFav } = monthFavData;

  return (
    <Grid item xs={12} md={3} className={classes.leftSection}>
      <LeftSectionCard data={monthFav} />
      <LeftSectionCard data={monthFav} />
      <LeftSectionCard data={monthFav} />
    </Grid>
  );
}
