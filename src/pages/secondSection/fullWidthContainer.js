import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100vw",
    position: "relative",
    marginLeft: "-50vw",
    left: "50%",
  },
  spacing: {
    paddingTop: '42px',
    paddingBottom: '34px',
    textAlign: 'left',
  }
}));

export default function FullWidthContainer(props) {
  const classes = useStyles();

  const { children, ...restProps } = props;
  return <div className={classes.fullWidth} {...restProps}>{props.children}</div>;
}
