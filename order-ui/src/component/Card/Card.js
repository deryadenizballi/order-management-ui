import React from "react";
import "./Card.css";

const Card = ({ shipping }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p>{shipping.title}</p>
      </div>
      <div className="card-content">
       <div><span>{shipping.item1} :</span> {shipping.courier} </div> 
       <div><span>{shipping.item2} :</span> {shipping.trackingNumber}</div> 
       <div><span>{shipping.item3} : </span> {shipping.deliveryDate} </div> 
       <div><span>{shipping.item4} :</span> {shipping.status} </div> 
      </div>
    </div>
  );
};

export default Card;
