import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Header, Segment, Progress, Button } from "semantic-ui-react";

class PollResult extends Component {
  handleClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { question, user } = this.props;
    const oneVotes = question.optionOne.votes.length;
    const twoVotes = question.optionTwo.votes.length;
    const totalNumVotes = oneVotes + twoVotes;
    const userVote = user.answers[question.id];

    return (
      <Fragment>
        <Header>Results:</Header>
        <Segment>
          {userVote === "optionOne" ? <h3>this is your vote!!</h3> : ""}
          <p style={{ fontWeight: "bold" }}>{question.optionOne.text}</p>
          <Progress
            percent={((oneVotes / totalNumVotes) * 100).toFixed(2)}
            progress
            success
          >
            {oneVotes} out of {totalNumVotes} votes
          </Progress>
        </Segment>
        <Segment>
          {userVote === "optionTwo" ? <h3>this is your vote!!</h3> : ""}

          <p style={{ fontWeight: "bold" }}>{question.optionTwo.text}</p>
          <Progress
            percent={((twoVotes / totalNumVotes) * 100).toFixed(2)}
            progress
            warning
          >
            {twoVotes} out of {totalNumVotes} votes
          </Progress>
        </Segment>

        <Button onClick={this.handleClick}>Back</Button>
      </Fragment>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  const user = users[authUser];

  return {
    user
  };
}
export default withRouter(connect(mapStateToProps)(PollResult));
