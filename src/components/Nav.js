import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";

class Nav extends Component {
  state = {
    activeItem: "home"
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = e => {
    this.props.setAuthUser(null);
  };

  render() {
    const { activeItem } = this.state;
    const { authUser } = this.props;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            as={NavLink}
            to="/"
            exact
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={NavLink}
            to="/add"
            name="add"
            active={activeItem === "add"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={NavLink}
            to="/leaderboard"
            name="leaderboard"
            active={activeItem === "leaderboard"}
            onClick={this.handleItemClick}
          />
          <Menu.Item position="right">{authUser}</Menu.Item>
          <Menu.Item as="button" name="logout" onClick={this.handleLogout} />
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}
export default connect(mapStateToProps, { setAuthUser })(Nav);
