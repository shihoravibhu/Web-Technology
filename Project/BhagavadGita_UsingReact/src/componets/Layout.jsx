import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'

function Layout(){
    
//   const [darkMode, setDarkMode] = useState(false);
    return(
        <>
       <nav className="navbar navbar-expand-lg position-sticky top-0 z-3 navbar-blur">
  <div className="container-fluid">
        <Link className="navbar-brand fs-4 fw-bold" to="/">Bhagavad Gita</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* <!-- Chapters Dropdown --> */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Chapters
              </Link>
              <ul className="dropdown-menu dropdown-columns">
                <li><Link className="dropdown-item" to="/Chapter/1"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 1</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/2"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 2</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/3"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 3</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/4"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 4</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/5"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 5</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/6"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 6</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/7"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 7</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/8"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 8</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/9"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 9</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/10"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 10</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/11"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 11</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/12"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 12</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/13"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 13</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/14"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 14</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/15"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 15</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/16"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 16</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/17"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 17</Link></li>
                <li><Link className="dropdown-item" to="/Chapter/18"><i className="bi bi-file-earmark-bar-graph"></i> Chapter 18</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/Quotes">Quotes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/About">About Gita</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/BhagavadGitaChatbot">Gita AI</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Donate">Donate</Link></li>
          </ul>

          <form className="d-flex ms-5" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div className="d-flex align-items-center ms-3">
            <button className="btn btn-outline-secondary me-2" id="themeToggle">
              <i className="bi bi-moon-fill"></i>
            </button>
            <div className="dropdown me-5">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                <i className="bi bi-translate"></i>
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#" data-lang="en">English</Link></li>
                <li><Link className="dropdown-item" to="#" data-lang="hi">हिन्दी</Link></li>
                <li><Link className="dropdown-item" to="#" data-lang="sa">संस्कृत</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

        <Outlet/>

    {/* <!-- footer --> */}

  <footer className="bg-light text-center text-muted py-4">
    <div className="container">
      {/* <!-- Navigation Links --> */}
      <ul className="nav justify-content-center mb-3">
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">About Us</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">App</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Bhagavad Gita AI</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Acknowledgements</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Privacy</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Terms</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Blog</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Donate</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">API</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Contact Us</Link></li>
      </ul>

      {/* <!-- Social Icons --> */}
      <div className="mb-3">
        <Link to="#" className="text-muted me-3"><i className="bi bi-facebook fs-4"></i></Link>
        <Link to="#" className="text-muted me-3"><i className="bi bi-twitter-x fs-4"></i></Link>
        <Link to="#" className="text-muted"><i className="bi bi-github fs-4"></i></Link>
      </div>

      {/* <!-- Copyright --> */}
      <p className="mb-3">
        © 2025 Copyright: <span style={{color:"orange", fontWeight:"500"}}>Ved Vyas Foundation</span>.
        All rights reserved.
      </p>

      {/* <!-- Store Buttons --> */}
      <div>
        <Link to="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play" height="40"/></Link>
        <Link to="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store" height="40"/></Link>
      </div>
    </div>
  </footer>
        </>
    )
}

export default Layout