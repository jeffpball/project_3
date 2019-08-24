import React from 'react'
import "./card.css";

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
            <strong>Price:</strong> {props.price}
          </li>
          <li>
          <strong>Link:</strong> 
          {props.link}
          </li>
        </ul>
      </div>
    </div>


  );
}

export default Card;