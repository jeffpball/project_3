import React from 'react'
import "./style.css"

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
          <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Service:</strong> {props.service}
          </li>
          <li>
<<<<<<< HEAD
            <strong>High Price:</strong> {props.highPrice}
          </li>
          <li>
            <strong>Low Price:</strong> {props.lowPrice}
=======
            <strong>Price:</strong> {props.price}
>>>>>>> master
          </li>
          <li>
          <strong>Link:</strong> {props.link}
          </li>
        </ul>
      </div>
    </div>


  );
}

export default Card;