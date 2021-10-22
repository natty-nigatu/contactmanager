import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faTimes, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { Consumer } from "../../context";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = { show: false };
  onShowClick = () => {
    this.setState({ show: !this.state.show });
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
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
                  style={{ cursor: "pointer", marginLeft: "0.5em" }}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
                <Link to={`/contact/edit/${id}`}>
                  <FontAwesomeIcon
                    icon={faPen}
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: ".5em",
                    }}
                  />
                </Link>
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
};
