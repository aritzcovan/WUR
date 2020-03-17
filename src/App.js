import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Home from "./components/Home";
import InfoCard from "./components/InfoCard";
import PollAnswering from "./components/PollAnswering";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authUser } = this.props;

    return (
      <Container>
        <Router>
          <div>
            {authUser === null ? (
              <Route
                render={() => (
                  <Grid padded="vertically" columns={1} centered>
                    <Grid.Row>
                      <Grid.Column style={{ maxWidth: 550 }}>
                        <Login />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                )}
              />
            ) : (
              <Fragment>
                <Nav />
                <Grid padded="vertically" columns={1} centered>
                  <Grid.Row>
                    <Grid.Column style={{ maxWidth: 550 }}>
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                          path="/questions/:id"
                          component={PollAnswering}
                        />
                      </Switch>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Fragment>
            )}
          </div>
        </Router>
      </Container>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
