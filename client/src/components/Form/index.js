import React from "react";
import "./style.css";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="Query">
              <strong className="strong1">Search Artist and Location:</strong>
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
            <input
              className="form-control"
              id="Title"
              type="text"
              value={q}
              placeholder="Los Angeles"
              name="q"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="btn btn-lg btn-warning ml-3"
            >
              <strong className="strong2">Search</strong>
            </button>
          </div>
        </form>
      </div>
    </div >
  );
}

export default Form;