import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5 bg-dark">
          <div className="col-sm-8 mx-auto">
            <div>
              <img src={require('./edgeticketslogo.JPG')} alt="" height="90%" width="90%"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing