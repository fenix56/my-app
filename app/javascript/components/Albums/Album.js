import React from "react";

const Album = (props) => {
    return (
        <div className="card">
            <div className="album-logo"><img src="https://via.placeholder.com/150/877cd8" /></div>
            <div className="album-title">{props.attributes.title}</div>
            <div className="album-owner-name">{props.attributes.name}</div>
            <div className="album-link">
                <a href={`/albums/${props.attributes.id}`}>View Album</a>
            </div>
        </div>
    )
}

export default Album