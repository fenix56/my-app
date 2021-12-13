import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Albums from './Albums/Albums'
import Album from './Album/Album'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <Link to="/" className="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                <strong>Album</strong>
              </Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route exact path="/" element={<Albums />}></Route>
          <Route exact path="/albums" element={<Albums />}></Route>
          <Route exact path="/albums/:id" element={<Album />}></Route>
        </Routes>

        <footer className="text-muted py-5">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App;