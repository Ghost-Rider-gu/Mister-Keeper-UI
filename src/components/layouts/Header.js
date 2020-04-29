import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    authenticated: false,
    login: "Mark Delevere",
  };

  logoutHandler() {
    console.log("Logout system!");
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor013"
          aria-controls="#navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" href="/">
          <img
            src="/img/logo.png"
            className="d-inline-block align-top"
            alt="Mister Keeper"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarColor01">
          {this.state.authenticated === true && (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Statistic
                </a>
              </li>
            </ul>
          )}
          <ul class="navbar-nav ml-auto">
            {this.state.authenticated === true && (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {this.state.login}
                </a>
              </li>
            )}
            {this.state.authenticated === true && (
              <li className="nav-item my-2 my-sm-0">
                <a
                  className="nav-link"
                  href="#"
                  onClick={this.logoutHandler.bind(this)}
                >
                  Logout
                </a>
              </li>
            )}
            {this.state.authenticated === false && (
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Sign in
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
