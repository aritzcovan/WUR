import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";

class Leaderboard extends Component {
  render() {
    const { userData } = this.props;

    return userData.map(user => (
      <Card key={user.id}>
        <Card.Content>
          <Image floated="left" size="small" src={user.image} />
        </Card.Content>
        <Card.Content>
          <p>Username: {user.name}</p>
          <p>Questions answered: {user.questionsAsked}</p>
          <p>Questions asked: {user.questionsAnswered}</p>
          <p>Total: {user.total}</p>
        </Card.Content>
      </Card>
    ));
  }
}
function mapStateToProps({ users }) {
  let userData = Object.values(users).map(user => ({
    id: user.id,
    name: user.name,
    image: user.avatarURL,
    questionsAsked: user.questions.length,
    questionsAnswered: Object.values(user.answers).length,
    total: user.questions.length + Object.values(user.answers).length
  }));

  userData = userData.sort((a, b) => a.total - b.total).reverse();

  return {
    userData
  };
}

export default connect(mapStateToProps)(Leaderboard);
