import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Albums from './Albums/Albums'
import Album from './Album/Album'

const App = () => {
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Albums />}></Route> 
          <Route path="/albums" element={<Albums />}></Route> 
          <Route exact path="/albums/:id" element={<Album />}></Route>
        </Routes>
      </Router>
    )
}

export default App;