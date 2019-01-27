import React, { Component } from "react";
import { Card, Button, Typography } from "@material-ui/core";
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <Card className="landing">
        <Typography variant="h5" class="landing-text">
          Sign in to manage your pet!
        </Typography>
        <Button size="large" variant="contained" color="primary">Sign in</Button>
        <Typography variant="h5" class="landing-text">
          Don't have an account yet?
        </Typography>
        <Button size="medium">
          Create Account
        </Button>
      </Card>
    );
  }
}

export default Landing;