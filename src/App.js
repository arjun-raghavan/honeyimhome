import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import {
  Home,
  About,
  Recipes,
  LifeStyle,
  Community,
  Tips,
  PageNotFound,
} from "./pages";
import logo from "./common/assets/logo.png";

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}
const Logo = () => (
  <Button component={Link} to={"/"}>
    <img src={logo} height="80" />
  </Button>
);
export default function App() {
  const allTabs = [
    "/",
    "/about",
    "/recipes",
    "/lifestyle",
    "community",
    "/tips",
  ];

  return (
    <Router>
      <div className="App">
        <Logo />
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname} variant="scrollable">
                <Tab
                  label="KNOW ME"
                  value="/about"
                  component={Link}
                  to={allTabs[1]}
                  {...a11yProps(0)}
                />
                <Tab
                  label="RECIPES"
                  value="/recipes"
                  component={Link}
                  to={allTabs[2]}
                  {...a11yProps(1)}
                />
                <Tab
                  label="LIFESTYLE/TRAVEL"
                  value="/lifestyle"
                  component={Link}
                  to={allTabs[3]}
                  {...a11yProps(2)}
                />
                <Tab
                  label="COMMUNITY"
                  value="/community"
                  component={Link}
                  to={allTabs[4]}
                  {...a11yProps(3)}
                />
                <Tab
                  label="TRICKS & TIPS"
                  value="/tips"
                  component={Link}
                  to={allTabs[5]}
                  {...a11yProps(4)}
                />
              </Tabs>
              <Switch>
                <Route exact path={allTabs[1]}>
                  <About />
                </Route>
                <Route exact path={allTabs[2]}>
                  <Recipes />
                </Route>
                <Route exact path={allTabs[3]}>
                  <LifeStyle />
                </Route>
                <Route exact path={allTabs[4]}>
                  <Community />
                </Route>
                <Route exact path={allTabs[5]}>
                  <Tips />
                </Route>
                <Route exact path={allTabs[0]}>
                  <Home />
                </Route>
                <Route>
                  <PageNotFound />
                </Route>
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}
