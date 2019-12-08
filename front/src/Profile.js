import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        lastname: "Simpson"
      }
    };
  }

  render() {
    return (
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary="Email"
              secondary={this.state.profile.email}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Name"
              secondary={
                this.state.profile.name + " " + this.state.profile.lastname
              }
            />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" href="/signin">
          Sign out
        </Button>
      </div>
    );
  }
}
