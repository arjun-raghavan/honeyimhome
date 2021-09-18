import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  navWrapper: {
    background: theme.palette.background.secondary,
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navBar: {
    height: "95%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: '"Gotham SSm A", sans-serif',
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "85%",
      width: "auto",
    },
    background: theme.palette.background.default,
    "& a": {
      color: theme.palette.text.primary,
      textDecorationLine: "unset",
      fontWeight: 'bold',
      opacity: '0.8',
      [theme.breakpoints.up("sm")]: {
        height: "85%",
        padding: "4px 36px",
      },

      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  divider: {
    height: "45%",
    [theme.breakpoints.up("md")]: {
      height: "70%",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.navWrapper}>
      <div className={classes.navBar}>
        <NavLink to="/recipes">Recipes</NavLink>
        <Divider orientation="vertical" className={classes.divider} />
        <NavLink to="/tips">Tips</NavLink>
        <Divider orientation="vertical" className={classes.divider} />
        <NavLink to="/about">About Us</NavLink>
        <Divider orientation="vertical" className={classes.divider} />
        <NavLink to="/lifestyle">LifeStyle</NavLink>
        <Divider orientation="vertical" className={classes.divider} />
        <NavLink to="/community">Community</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
