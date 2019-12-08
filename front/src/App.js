import React from "react";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

//import MyAwesomeReactComponent from './MyAwesomeReactComponent';

function App() {
  return (
    <div>
      <Grid container alignItems="center" style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Paper elevation={4} style={{ margin: 32 }}>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                <img
                  alt="homer"
                  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <BrowserRouter>
                  <Switch>
                    <Route path={["/", "/signin"]} exact>
                      <SignIn />
                    </Route>
                    <Route exact path="/signup">
                      <SignUp />
                    </Route>
                    <Route exact path="/profile">
                      <Profile />
                    </Route>
                  </Switch>
                </BrowserRouter>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
