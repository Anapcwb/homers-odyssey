import React, { Component } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Grid,
  Container
} from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flash: "",
      email: "mon@email.com",
      password: "",
      clicked: false
    };
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ clicked: true });

    // fetch("/auth/signin", {
    //   method: "POST",
    //   headers: new Headers({
    //     "Content-Type": "application/json"
    //   }),
    //   body: JSON.stringify(this.state)
    // })
    //   .then((res) => res.json())
    //   .then(
    //     (res) => {
    //       this.setState({ flash: res.flash });
    //       this.props.history.push("/profile");
    //     }, //status code 2xx
    //     (err) => this.setState({ flash: err.flash }) // status code 4xx 5xx
    //   );\
  }

  render() {
    let redirect = "";

    if (this.state.clicked) {
      redirect = <Redirect to="/profile" />;
    }

    return (
      <Container component="main" maxWidth="xs">
        {redirect}

        <h1>Sign in!</h1>
        <Snackbar
          open={this.state.flash !== ""}
          onClose={() => {
            this.setState({ flash: "" });
          }}
          autoHideDuration={4000}
          ContentProps={{
            "aria-describedby": "snackbar-fab-message-id"
          }}
          message={<span id="snackbar-fab-message-id">{this.state.flash}</span>}
        />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={this.updateEmailField.bind(this)}
                type="email"
                name="email"
                fullWidth
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={this.updatePasswordField.bind(this)}
                type="password"
                name="password"
                fullWidth
                label="Password"
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Sign in
          </Button>

          <Link to="/signup">Sign up</Link>
        </form>
      </Container>
    );
  }
}
