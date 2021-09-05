import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { AppLayout } from "../common";
import YouTubeCard from "../common/components/youTube/youTubeCard";
import homeData from "../data/home.json";

import { FirstSection } from "./homeComp";
import { SecondSection } from "./secondSection";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: "16px auto",
    width: "70%",
    height: "1px",
    [theme.breakpoints.up("md")]: {
      margin: "40px auto",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const { cooking } = homeData;

  return (
    <AppLayout>
      <FirstSection />
      <SecondSection />
    </AppLayout>
  );
}
