import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navWrapper: {
    background: theme.palette.background.secondary,
    height: "40px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBar: {
    height: "95%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: "85%",
    },
    background: theme.palette.background.default,
    '& a': {
      color: theme.palette.text.primary,
      textDecorationLine: "unset",
      padding: '4px 11px',
      [theme.breakpoints.up('sm')]: {
        height: "85%",
        padding: '4px 36px'
      },
    }
  },
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.navWrapper}>
      <div  className={classes.navBar}>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/tips">Tips</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/lifestyle">LifeStyle</NavLink>
        <NavLink to="/community">Community</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
