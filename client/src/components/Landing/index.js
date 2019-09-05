import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <div>
            <img src={require('./edgeticketslogo.JPG')} alt="" height="100%" width="100%" />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing