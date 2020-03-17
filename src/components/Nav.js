import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/add">
            <Menu.Item
              name="add"
              active={activeItem === "add"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/leaderboard">
            <Menu.Item
              name="leaderboard"
              active={activeItem === "leaderboard"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </div>
    );
  }
}
export default Nav;
