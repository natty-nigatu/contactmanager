import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
      break;
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "Jdoe@gmail.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Sarah Smith",
        email: "ssmith@gmail.com",
        phone: "333-555-5555",
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "hjoe@gmail.com",
        phone: "444-555-5555",
      },
    ],
    dispatch: (action) => this.setState(reducer(this.state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
