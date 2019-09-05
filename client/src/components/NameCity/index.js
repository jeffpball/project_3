import React from 'react'
import "./style.css"

function NameCity(props) {
    return (
      <div className="name">
            {props.name}
            {props.city}
      </div>
    );
  }


export default NameCity;