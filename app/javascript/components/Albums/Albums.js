import React, { useState, useEffect } from "react";
import axios from "axios";

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get('api/v1/albums.json')
        .then( response => console.log(response) )
        .catch( response => console.log(response) )
    }, [albums.length])

    return (
     <div>This is the Albums#index view for our app.</div>
    )
}

export default Albums;