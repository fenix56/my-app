import React from "react";
import { Link } from "react-router-dom";

const Album = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/150/877cd8" />
            <div className="card-body">
                <h5 className="card-title">{props.attributes.title}</h5>
                <p className="card-text">This album is owned by <b>{props.attributes.name}</b></p>
                <Link to={`/albums/${props.attributes.id}`} className="btn btn-primary">View Album</Link>
            </div>
        </div>
    )
}

export default Album