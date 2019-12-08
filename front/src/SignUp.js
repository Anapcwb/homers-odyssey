import React, { Component } from "react";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: "",
      email: "mon@email.com",
      password: "",
      passwordconf: "",
      name: "James",
      lastname: "Bond",
      clicked: false
    };
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updateNameField(event) {
    this.setState({ name: event.target.value });
  }

  updateLastNameField(event) {
    this.setState({ lastname: event.target.value });
  }

  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }

  updatePasswordConfField(event) {
    this.setState({ passwordconf: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.password !== this.state.passwordconf) {
      alert("Password confirmation did not match!");
    } else {
      fetch("/auth/signup", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(this.state)
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.flash === "User has been signed up!") {
            this.setState({ flash: res.flash, clicked: true });
          } else {
            this.setState({ flash: res.flash });
          }
        });
    }
    event.preventDefault();
  }

  render() {
    let redirect = "";

    if (this.state.clicked) {
      redirect = <Redirect to="/" />;
    }

    return (
      <div>
        {redirect}
        <h1>Sign up!</h1>
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
          <TextField
            onChange={this.updateEmailField.bind(this)}
            type="email"
            name="email"
            fullWidth
            label="Email"
          />
          <TextField
            onChange={this.updateNameField.bind(this)}
            type="text"
            name="firstName"
            fullWidth
            label="First Name"
          />
          <TextField
            onChange={this.updateLastNameField.bind(this)}
            type="text"
            name="lastName"
            fullWidth
            label="Last Name"
          />
          <TextField
            onChange={this.updatePasswordField.bind(this)}
            type="password"
            name="password"
            fullWidth
            label="Password"
          />
          <TextField
            onChange={this.updatePasswordConfField.bind(this)}
            type="password"
            name="passwordConf"
            fullWidth
            label="Password Confirmation"
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Sign Up!
          </Button>
          <Link to="/signin">Sign in</Link>
        </form>
      </div>
    );
  }
}
