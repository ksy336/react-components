import "./cards.css";
import {useState, useEffect} from "react";
import React from "react";

export const Card = ({item}) => {
    const [formValues, setFormValues] = useState([]);

    return (
        <div className="card-wrapper">
            <div className="card-container">{item}</div>
        </div>
    )
}
export default Card;