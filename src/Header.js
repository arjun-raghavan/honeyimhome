import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import HomePage from "./pages/home";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { NavBar } from "./common";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Box>
      <NavBar />
      <HomePage />
    </Box>
  );
}
