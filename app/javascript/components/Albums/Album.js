import React from "react";
import { Link } from "react-router-dom";

const cardStyle = {
    width: '14rem',
    height: '28rem',
};

const titleStyle = {
    height: '80px',
};

const Album = (props) => {
    return (
        <div className="col p-2">
            <div className="card" style={cardStyle}>
                <img className="card-img-top" src="https://via.placeholder.com/150/877cd8" />
                <div className="card-body">
                    <h5 className="card-title" style={titleStyle}>{props.attributes.title}</h5>
                    <p className="card-text">This album is owned by <b>{props.attributes.user.name}</b></p>
                    <Link to={`/albums/${props.attributes.id}`} className="btn btn-primary">View Album</Link>
                </div>
            </div>
        </div>

    )
}

export default Album