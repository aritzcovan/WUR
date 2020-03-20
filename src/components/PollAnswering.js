import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Radio, Button, Grid, Image, Card, Header } from "semantic-ui-react";
import { addUserAnswer } from "../actions/users";
import PollResult from "./PollResult";

class PollAnswering extends Component {
  state = {
    selectedValue: "",
    answered: false
  };
  handleValueChange = (e, { value }) => {
    this.setState({ selectedValue: value });
  };
  handleAnswer = e => {

    const { authUser, question, dispatch } = this.props;
    
    let answer = {
      authedUser: authUser,
      questionId: question.id,
      option: this.state.selectedValue
    };
    dispatch(addUserAnswer(answer));
    this.setState({ answered: true });
  };

  render() {
    const { question, users  } = this.props;

    return (
      <Fragment>
        {this.state.answered === true ? (
          <PollResult question={question} />
        ) : (
          <Card fluid>
            <Card.Content>
              <Card.Header>
                <Header as="h2">{question.author} asks:</Header>
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image
                      src={users[question.author].avatarURL}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <div>
                      <h3>Would you rather:</h3>
                    </div>
                    <div>
                      <div>
                        <Radio
                          name="group"
                          value="optionOne"
                          checked={this.state.selectedValue === "optionOne"}
                          onChange={this.handleValueChange}
                          label={question.optionOne.text}
                        />
                        <br />
                        <Radio
                          name="group"
                          value="optionTwo"
                          checked={this.state.selectedValue === "optionTwo"}
                          onChange={this.handleValueChange}
                          label={question.optionTwo.text}
                        />
                      </div>
                      <div>
                        <Button
                          disabled={
                            this.state.selectedValue === "" ? true : false
                          }
                          onClick={this.handleAnswer}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        )}
      </Fragment>
    );
  }
}
function mapStateToProps({ authUser, questions, users }, props) {
  // const { id } = props.match.params;
  const { question } = props;
  return {
    question,
    authUser,
    users
  };
}

export default connect(mapStateToProps)(PollAnswering);
