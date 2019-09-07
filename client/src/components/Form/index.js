import React from 'react'
import "./style.css";

function Form({ name, city, handleInputChange, handleFormSubmit }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="form-inline">
          <div className="form-group-lg">
            <label htmlFor="Query">
            </label>
            <input
              className="form-control-lg"
              id="Artist"
              type="text"
              value={name}
              placeholder="Artist"
              name="name"
              onChange={handleInputChange}
              required
            />
            <input
              className="form-control-lg"
              id="City"
              type="text"
              value={city}
              placeholder="City"
              name="city"
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
