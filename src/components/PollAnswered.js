import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import PollResult from "./PollResult";
import { Redirect } from "react-router-dom";

class PollAnswered extends Component {
  state = {
    showResults: false
  };
  handleClick = e => {
    this.setState({ showResults: true });
  };
  render() {
    const { questionInfo } = this.props;

    if (this.state.showResults === true) {
      return <Redirect push to={`/questions/${questionInfo.id}`} />;
    }

    return (
      <div>
        {this.state.showResults === true ? (
          <PollResult question={questionInfo} />
        ) : (
          <div>
            <h3>would you rather</h3>
            <div>
              <p>{questionInfo.optionOne.text}</p>
              <span>OR</span>
              <p>{questionInfo.optionTwo.text}</p>
            </div>
            <div>
              <Button color="orange" onClick={this.handleClick}>
                Results
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default PollAnswered;
