import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function ContactInputGroup({
  name,
  label,
  onChange,
  value,
  type,
  error,
}) {
  return (
    <div>
      <div className="form-group mb-2">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          className={classnames("form-control form-control-lg", {
            "is-invalid": error,
          })}
          placeholder={`Enter ${label}...`}
          value={value}
          onChange={onChange}
        />

        {error && <div className="invalid-feedback"> {error} </div>}
      </div>
    </div>
  );
}

ContactInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

ContactInputGroup.defaultProps = {
  type: "text",
};
