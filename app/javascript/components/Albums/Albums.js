import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Album from "./Album";

const Albums = () => {
  const [albums, setAlbums] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const { page } = useParams();

  let page_str = "page=1"

  if (page) {
    page_str = page
  }

  useEffect(() => {
    axios.get(`api/v1/albums?${page_str}`)
      .then(resp => {
        setAlbums(resp.data.data)
        setCurrentPage(resp.data.page)
      })
      .catch(resp => console.log(resp))
  }, [])

  console.log(albums)

  const grid = albums.map(item => {
    return (
      <Album
        key={item.id}
        attributes={item}
      />
    )
  })

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">{grid}</div>
      </div>
    </div>
  )
}

export default Albums;