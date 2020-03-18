import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Select, Button } from "semantic-ui-react";
import { setAuthUser } from "../actions/authUser";

class Login extends Component {
  state = {
    selectedUser: ""
  };

  setSelectedUser = (e, { value }) => {
    this.setState({ selectedUser: value });
  };

  doLogin = e => {
    const { selectedUser } = this.state;
    const { setAuthUser } = this.props;

    setAuthUser(selectedUser);
  };

  render() {
    const { users } = this.props;
    return (
      <Fragment>
        <Select
          placeholder="select user"
          onChange={this.setSelectedUser}
          options={users}
        />
        <Button
          disabled={this.state.selectedUser === ""}
          onClick={this.doLogin}
        >
          login
        </Button>
      </Fragment>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users: Object.values(users).map(u => {
      return { key: u.id, value: u.id, text: u.name };
    })
  };
}
export default connect(mapStateToProps, { setAuthUser })(Login);
