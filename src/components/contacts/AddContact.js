import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
   };

  render() {
    return (
      <div className="card mb-3">
        <h1>Add Contact</h1>
      </div>
    );
  }
}
