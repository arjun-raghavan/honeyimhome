import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { headingStyle1, headingStyle2, headingStyle3 } from "../../common/assets";

// shows diff bottom images
const headingMap = {
  primary: headingStyle1,
  secondary: headingStyle2,
  tertiary: headingStyle3,
}

const useStyles = makeStyles({
  container: {
    fontFamily: '"Chronicle SSm A", serif',
    backgroundImage: (props) => props.headingType ? `url(${headingMap[props.headingType]})` : '',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    fontSize: (props) => props.fontSize,
    fontStyle: (props) => props.fontStyle || 'normal',
    backgroundSize: "31% 15px",
    paddingBottom: '20px',
  },
});

export default function Heading(props) {
  const { content = '',headingType, fontSize, fontStyle, ...restProps } = props;
  const classes = useStyles(props);

  return (
    <Typography
      gutterBottom
      className={classes.container}
      {...restProps}
    >
      {content}
    </Typography>
  );
}
