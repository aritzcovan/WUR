import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PollAnswering from "./PollAnswering";
import PollResult from "./PollResult";

const NotFound = () => <h3>Sorry. the poll you seek does not exist.</h3>;

class PollMgr extends Component {
  render() {
    const { componentToRender, badId, question } = this.props;
    return (
      <Fragment>
        {badId === true ? (
          <NotFound />
        ) : componentToRender === "pollResult" ? (
          <PollAnswering question={question} />
        ) : (
          <PollResult question={question} />
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ users, questions, authUser }, props) {
  const { id } = props.match.params;

  let componentToRender,
    badId = false;

  //need to determine if this user has answered this question
  const question = questions[id];
  if (question === undefined) {
    return { badId: true };
  }
  const user = users[authUser];

  if (Object.keys(user.answers).includes(question.id)) {
    componentToRender = "pollAnswering";
  } else {
    componentToRender = "pollResult";
  }
  return {
    componentToRender,
    badId,
    question
  };
}

export default connect(mapStateToProps)(PollMgr);
