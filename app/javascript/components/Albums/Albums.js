import React, { useState, useEffect} from "react";
import axios from "axios";
import Album from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get('api/v1/albums.json')
        .then( resp => {
            setAlbums(resp.data)
        })
        .catch( resp => console.log(resp) )
    }, [albums.length])

    const list = albums.map( item => {
        return (
            <Album 
                key={item.id}
                attributes={item}
            />
        )
    })

    return (
        <div className="home">
            <div className="header">
                <h1>Albums List</h1>
                <div className="sub-header">This is the Albums#index view for our app.</div>
            </div>
            
            <div className="grid">
                <ul>{list}</ul>    
            </div>
            
        </div>
    )
}

export default Albums;