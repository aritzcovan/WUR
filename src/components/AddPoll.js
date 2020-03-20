import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Grid, Header, Input, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { doAddQuestion } from "../actions/questions";

class AddPoll extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    success: false
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    const { optionOne, optionTwo } = this.state;
    const { authUser, dispatch } = this.props;

    new Promise((res, rej) => {
      dispatch(doAddQuestion(authUser, optionOne, optionTwo));
      setTimeout(() => {
        res(true);
      }, 1000);
    }).then(() => {
      this.setState({
        optionOne: "",
        optionTwo: ""
      });
      this.setState({ success: true });
    });
  };
  render() {
    const isDisabled =
      this.state.optionOne === "" || this.state.optionTwo === "";

    if (this.state.success) {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <Grid>
          <Grid.Row>
            <Header as="h3">Would you rather:</Header>
          </Grid.Row>
          <Grid.Row>
            <Input
              placeholder="option 1"
              value={this.state.optionOne}
              onChange={this.handleChange}
              id="optionOne"
            ></Input>
          </Grid.Row>
          <Grid.Row>
            <Input
              placeholder="option 2"
              value={this.state.optionTwo}
              onChange={this.handleChange}
              id="optionTwo"
            ></Input>
          </Grid.Row>
          <Grid.Row>
            <Button onClick={this.handleSubmit} disabled={isDisabled}>
              submit
            </Button>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps)(AddPoll);
