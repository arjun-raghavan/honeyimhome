import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import {
  Switch,
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import {
  Home,
  About,
  RecipeCategory,
  LifeStyle,
  Community,
  Tips,
  PageNotFound,
} from "./pages";
import logo from "./common/assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import RecipeList from "./pages/recipes/recipeList";
import RecipeDetail from "./pages/recipes/recipeDetail";

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  tab: {
    fontWeight: theme.typography.fontWeightBold,
    "&:active": {
      opacity: 1,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  },
}));

const Logo = () => (
  <Button component={NavLink} to={"/"}>
    <img src={logo} height="50" alt="logo" />
  </Button>
);
export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/recipes/:category/:id" component={RecipeDetail} />
          <Route path="/recipes/:category/" component={RecipeList} />
          <Route path="/recipes" component={RecipeCategory} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
