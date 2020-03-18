import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import InfoCard from "./InfoCard";

class Home extends Component {
  render() {
    const { answered, unanswered } = this.props;
    const panes = [
       {
        menuItem: "unanswered",
        render: () => (
          <Tab.Pane>
            {unanswered.map((question, idx) => (
              <InfoCard key={idx} type="unanswered" questionInfo={question} />
            ))}
          </Tab.Pane>
        )
      },
      {
        menuItem: "answered",
        render: () => (
          <Tab.Pane>
            {answered.map((question, idx) => (
              <InfoCard key={idx} type="answered" questionInfo={question} />
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
