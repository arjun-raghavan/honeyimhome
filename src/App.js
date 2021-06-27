import React from "react";
import HomePage from "./HomePage";
import About from "./About";
import Header from "./Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Router>

                <Header />
                <Switch>
                    <Route exact path="/about" render={props => <About {...props} />} />
                    <Route exact from="/" render={props => <HomePage {...props} />} />
                </Switch>
            </Router>
        </div>
    );
}
