import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import InfoCard from "./InfoCard";

class Home extends Component {
  render() {
    const { answered, unanswered, authUser } = this.props;
    const panes = [
      {
        menuItem: "answered",
        render: () => (
          <Tab.Pane>
            {answered.map(question => (
              <InfoCard type="answered" questionInfo={question} />
            ))}
          </Tab.Pane>
        )
      },
      {
        menuItem: "unanswered",
        render: () => (
          <Tab.Pane>
            {unanswered.map(question => (
              <InfoCard type="unanswered" questionInfo={question} />
            ))}
          </Tab.Pane>
        )
      }
    ];

    return <Tab panes={panes} />;
  }
}

function mapStateToProps({ authUser, users, questions }) {
  const ids = Object.keys(users[authUser].answers);
  const answeredQues = Object.values(questions)
    .filter(ques => !ids.includes(ques.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unansweredQues = Object.values(questions)
    .filter(ques => ids.includes(ques.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answered: answeredQues,
    unanswered: unansweredQues,
    authUser
  };
}
export default connect(mapStateToProps)(Home);
