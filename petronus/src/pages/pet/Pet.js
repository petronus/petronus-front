import React, { Component } from "react";
import { Card, Button, Typography } from "@material-ui/core";

class Pet extends Component {
  render() {
    return (
      <Card className="pet">
        <Typography>
          This is where we'll manage our pet.
        </Typography>
      </Card>
    );
  }
}

export default Pet;