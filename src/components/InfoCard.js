import React, { Component } from "react";
import { Header, Card, Grid, Image, Button, Radio } from "semantic-ui-react";
import { connect } from "react-redux";
import PollUnanswered from "./PollUnanswered";
import PollAnswered from './PollAnswered';


const PollResults = () => (
  <div>
    <h3>would you rather</h3>
    <div>
      <p>option 1 got : x out of y votes</p>

      <p>option 2 got : x out of y votes or XX%</p>
    </div>
    <div>
      <Button>Back</Button>
    </div>
  </div>
);

class InfoCard extends Component {
  render() {
    const { type, questionInfo, users } = this.props;
    console.log(typeof type, questionInfo);
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Header as="h2">{questionInfo.author} says:</Header>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image
                  src={users[questionInfo.author].avatarURL}
                  size="small"
                />
              </Grid.Column>
              <Grid.Column>
                {type === 'answered' ? (
                  <PollAnswered questionInfo={questionInfo} />
                ) : (
                  <PollUnanswered questionInfo={questionInfo} />
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

function mapStateToProps({ users, questions, authUser }) {
  return {
    users,
    questions,
    authUser
  };
}

export default connect(mapStateToProps)(InfoCard);
