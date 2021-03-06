import axios from "axios";
import React, { Component } from "react";

import { Consumer } from "../../context";
import ContactInputGroup from "./ContactInputGroup";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {},
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    let now = false;
    let error = {};

    if (this.state.name === "") {
      error.name = "Name is Required.";
      now = true;
    }
    if (this.state.email === "") {
      error.email = "Email is Required.";
      now = true;
    }
    if (this.state.phone === "") {
      error.phone = "Phone is Required.";
      now = true;
    }

    if (now && error) {
      this.setState({ error });
      return;
    }

    const contact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      contact
    );

    dispatch({
      type: "ADD_CONTACT",
      payload: res.data,
    });

    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {},
    });
    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <ContactInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    error={error.name}
                  />
                  <ContactInputGroup
                    label="Email"
                    name="email"
                    value={email}
                    type="email"
                    onChange={this.onChange}
                    error={error.email}
                  />
                  <ContactInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                    error={error.phone}
                  />
                  <div className="d-grid">
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-light"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
