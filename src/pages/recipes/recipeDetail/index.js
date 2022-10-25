import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppLayout } from "../../../common";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function RecipeDetail() {
  const classes = useStyles();

  return (
    <AppLayout>
      <div className={classes.container}>Recipe Detail page</div>
    </AppLayout>
  );
}
