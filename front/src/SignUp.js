import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "",
      passwordconf: "",
      name: "James",
      lastname: "Bond"
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
    if (this.state.password != this.state.passwordconf) {
      alert("Password confirmation did not match!");
    } else {
      console.log(this.state);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            onChange={this.updateEmailField.bind(this)}
            type="email"
            name="email"
          />
          <br />
          <input
            onChange={this.updateNameField.bind(this)}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <br />
          <input
            onChange={this.updateLastNameField.bind(this)}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <br />
          <input
            onChange={this.updatePasswordField.bind(this)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />

          <input
            onChange={this.updatePasswordConfField.bind(this)}
            type="password"
            name="passwordConf"
            placeholder="Password Confirmation"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
