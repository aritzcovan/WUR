import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class PollUnanswered extends Component {
  state = {
    viewPoll: false
  };

  handleClick = e => {
    this.setState(prevState => ({
      viewPoll: !prevState.viewPoll
    }));
  };
  render() {
    const { questionInfo } = this.props;

    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${questionInfo.id}`} />;
    }
    return (
        
      <div>
        <h3>would you rather</h3>
        <div>
          <p>{questionInfo.optionOne.text}</p>
          <span>OR</span>
          <p>{questionInfo.optionTwo.text}</p>
        </div>
        <div>
          <Button color="green" onClick={this.handleClick}>
            Answer Poll
          </Button>
        </div>
      </div>
    );
  }
}

export default PollUnanswered;
