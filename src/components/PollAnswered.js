import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class PollAnswered extends Component {
  render() {
    const { questionInfo } = this.props;
    return (
      <div>
        <h3>would you rather</h3>
        <div>
          <p>{questionInfo.optionOne.text}</p>
          <span>OR</span>
          <p>{questionInfo.optionTwo.text}</p>
        </div>
        <div>
          <Button color="orange">Results</Button>
        </div>
      </div>
    );
  }
}
export default PollAnswered;