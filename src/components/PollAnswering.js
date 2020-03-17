import React, { Component } from "react";
import { connect } from "react-redux";
import { Radio, Button } from "semantic-ui-react";

class PollAnswering extends Component {
  render() {
    const option1 = "drive a car";
    const option2 = "ride a motorcycle";

    return (
      <div>
        <h3>would you rather</h3>
        <div>
          <Radio name="group" value="option1" label={option1} />
          <br />
          <Radio name="group" value="option2" label={option2} />
        </div>
        <div>
          <Button>submit</Button>
        </div>
      </div>
    );
  }
}

export default connect()(PollAnswering);
