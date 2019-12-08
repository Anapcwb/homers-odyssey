import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "test@test.com" };
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input
          onChange={this.updateEmailField.bind(this)}
          type="email"
          name="email"
        />
      </div>
    );
  }
}
