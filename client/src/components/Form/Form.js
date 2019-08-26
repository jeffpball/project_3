import React from "react";
import "./form.css";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="Query">
              <strong>Search Artist</strong>
            </label>
            <input
              className="form-control"
              id="Title"
              type="text"
              value={q}
              placeholder="Post Malone"
              name="q"
              onChange={handleInputChange}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;