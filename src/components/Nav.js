import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = {
    activeItem: "home"
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

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
        </Menu>
      </div>
    );
  }
}
export default Nav;
