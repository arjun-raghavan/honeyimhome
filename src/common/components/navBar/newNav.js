import logo from "../../assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import SocialMedia from "../socialMedia";
import { maxWidth } from "@material-ui/system";
import NavBar from "./navBar";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    zIndex: "5",
    width: '100%',
    top: '0',
    left: '0',
    background: theme.palette.background.default,
  },
  topBar: {
    display: "flex",
    height: "45px",
    margin:'auto',
    padding: '0 16px',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1280px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0 24px'
    },
  },
  logo: {
    height: "45px",
  },
  empty: {
    position: 'relative',
    minHeight: "85px",
    [theme.breakpoints.up('lg')]: {
      minHeight: "100px",
    },
  },
}));

function NewNav(props) {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        <div className={classes.topBar}>
          <NavLink to="/">
            <img src={logo} className={classes.logo} />
          </NavLink>
          <SocialMedia />
        </div>
        <NavBar />
      </header>
      <div className={classes.empty} />
    </>
  );
}

export default NewNav;
