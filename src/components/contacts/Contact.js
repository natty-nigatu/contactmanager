import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Consumer } from "../../context";

export default class Contact extends Component {
  state = { show: true };
  onShowClick = () => {
    this.setState({ show: !this.state.show });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card card-body mb-3">
              <h4 className="card-title">
                {name}
                <FontAwesomeIcon
                  icon={faSortDown}
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                />

                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h4>
              {this.state.show ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email} </li>
                  <li className="list-group-item">Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};
