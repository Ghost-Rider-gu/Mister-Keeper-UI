import React, { Component } from "react";
import PropTypes from "prop-types";

class Bio extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          <li>Name: Entony Barboza</li>
          <li>Role: Manager</li>
          <li>Stats: data graph</li>
        </ul>
      </div>
    );
  }
}

Bio.defaulProps = {
  title: "User profile"
};

Bio.propTypes = {
  title: PropTypes.string.isRequired
};

export default Bio;
