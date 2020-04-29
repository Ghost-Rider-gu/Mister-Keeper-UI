import React, { Component } from "react";
import Service from "./Service";

class Services extends Component {
  state = {
    services: [
      {
        id: "1",
        name: "Books",
        description: "Your book storage"
      },
      {
        id: "2",
        name: "Music",
        description: "Your music storage"
      },
      {
        id: "3",
        name: "Games",
        description: "Your games storage"
      },
      {
        id: "4",
        name: "Movies",
        description: "Your movies storage"
      }
    ]
  };

  render() {
    const { services } = this.state;
    return (
      <div>
        {services.map(service => (
          <Service key={service.id} serviceData={service} />
        ))}
      </div>
    );
  }
}

export default Services;
