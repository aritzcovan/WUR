import React, { Component } from "react";
import { Header, Card, Grid, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import PollUnanswered from "./PollUnanswered";
import PollAnswered from "./PollAnswered";

class InfoCard extends Component {
  render() {
    const { type, questionInfo, users } = this.props;
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Header as="h2">{questionInfo.author} asks:</Header>
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
                {type === "answered" ? (
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
