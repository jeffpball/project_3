import React from 'react'
import "./style.css"
import { Button } from 'react-bootstrap'

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
            <strong>Low Price:</strong> {props.lowPrice}
          </li>

          <li>
            <strong>High Price:</strong> {props.highPrice}
          </li>

          <li>
            <Button variant="warning" href={props.link}>Link</Button>
          </li>

        </ul>
      </div>
    </div>


  );
}

export default Card;
