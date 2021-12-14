import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Album from "./Album";

const Albums = () => {
  const [albums, setAlbums] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);

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
        setMaxPages(resp.data.pages)
      })
      .catch(resp => console.log(resp))
  }, [])

  let rows = []
  for(let i=1; i <= maxPages; i++){
    rows.push(i)
  }

const page_grid = rows.map(item => {
  return (
    <li className="page-item">
      <Link className="page-link" to={`?page=${item}`} > {item} </Link>
    </li>
  )
})

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
      <nav>
        <ul className="pagination justify-content-center">
          {page_grid}
        </ul>
      </nav>

      <br />

      <div className="container">
        <div className="row">{grid}</div>
      </div>
    </div>
  )
}

export default Albums;