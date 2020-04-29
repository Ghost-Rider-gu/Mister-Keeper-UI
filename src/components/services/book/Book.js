import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.picture} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.authors}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Book;
