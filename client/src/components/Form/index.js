<<<<<<< HEAD
import React, { Component } from 'react'
import axios from 'axios'
import "./style.css";
// import { search } from '../SearchFunctions'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      city: '',
      errors: {}
    }
  
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  // onSubmit(e) {
  //   e.preventDefault()

  //   const newSearch = {
  //     name: this.state.name,
  //     city: this.state.city,
  //   }

    onSubmit = (e) => {
      e.preventDefault();
      // get our form data out of state
      const { name, city } = this.state;
  
      axios.post('/api/ticketmaster/search', { name, city })
        .then((result) => {
          //access the results here....
          console.log(result)
        });

        axios.post('/api/stubhub/search', { name, city })
        .then((result) => {
          //access the results here....
          console.log(result)
        });

    // search(newSearch).then(res => {
    //   this.props.history.push(`/`)
    // })
  }

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <form noValidate onSubmit={this.onSubmit} className="form-inline">
              <div className="form-group">
                <label htmlFor="Query">
                  <strong className="strong1">Search Artist and City:</strong>
                </label>

                <input
                  className="form-control"
                  id="Title"
                  type="text"
                  value={this.state.name}
                  placeholder="Post Malone"
                  name="name"
                  onChange={this.onChange}
                  required
                />
                <input
                  className="form-control"
                  id="Title"
                  type="text"
                  value={this.state.city}
                  placeholder="San Francisco"
                  name="city"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div>
                <button
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
}

export default Search


// function Form({ q, handleInputChange, handleFormSubmit }) {
//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <form className="form-inline">
//           <div className="form-group">
//             <label htmlFor="Query">
//               <strong className="strong1">Search Artist and City:</strong>
//             </label>
//             <input
//               className="form-control"
//               id="Title"
//               type="text"
//               value={q}
//               placeholder="Post Malone"
//               name="q"
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               className="form-control"
//               id="Title"
//               type="text"
//               value={q}
//               placeholder="San Francisco"
//               name="q"
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <button
//               onClick={handleFormSubmit}
//               type="submit"
//               className="btn btn-lg btn-warning ml-3"
//             >
//               <strong className="strong2">Search</strong>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div >
//   );
// }

// export default Form;
=======
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
>>>>>>> master
