import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Recipes,
  LifeStyle,
  Community,
  Tips,
  PageNotFound,
} from "../../pages";

export default function NavBar() {
  const allTabs = ["/about", "/recipes", "/lifestyle", "community", "/tips"];

  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab
                  label="KNOW ME"
                  value="/about"
                  component={Link}
                  to={allTabs[0]}
                />
                <Tab
                  label="RECIPES"
                  value="/recipes"
                  component={Link}
                  to={allTabs[1]}
                />
                <Tab
                  label="LIFESTYLE/TRAVEL"
                  value="/lifestyle"
                  component={Link}
                  to={allTabs[2]}
                />
                <Tab
                  label="COMMUNITY"
                  value="/community"
                  component={Link}
                  to={allTabs[3]}
                />
                <Tab
                  label="TRICKS & TIPS"
                  value="/tips"
                  component={Link}
                  to={allTabs[4]}
                />
              </Tabs>
              <Switch>
                <Route exact path={allTabs[0]}>
                  <About />
                </Route>
                <Route exact path={allTabs[1]}>
                  <Recipes />
                </Route>
                <Route exact path={allTabs[2]}>
                  <LifeStyle />
                </Route>
                <Route exact path={allTabs[3]}>
                  <Community />
                </Route>
                <Route exact path={allTabs[4]}>
                  <Tips />
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
