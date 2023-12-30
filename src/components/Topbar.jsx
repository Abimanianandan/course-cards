import React from 'react'
import {Link} from 'react-router-dom'
function TopBar() {
  return <nav className="navbar  navbar-expand-lg ms-5 navbar-light bg-light">
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          { <ul className="nav  me-auto mb-2 mb-lg-0 ms-lg-4"> 
          <li className="nav-item active">
                <Link to='/all' className="nav-link " aria-current="page" href="index.html">
                <span>ALL</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to='/fullstack' className="nav-link " aria-current="page" href="index.html">
                <span>FULLSTACK DEVELOPMENT</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to='/datascience' className="nav-link" href="index.html">
                    <span>DATA SCIENCE</span>
                    </Link>
               </li>
              <li className="nav-item active">
                <Link to='/cyberscurity' className="nav-link" href="index.html">
                   <span>CYBER SECURITY</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to='/career' className="nav-link" href="index.html">
                    <span>CAREER</span>
                </Link>
              </li>
          </ul>
          } 
      </div>
  
</nav>
}

export default TopBar