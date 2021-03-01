import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-bg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Hero Player Transfer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <ul class="navbar-nav ms-auto ">
                      <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#Home">Home</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link" href="#player-list">Player List</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link" href="#About-us">About Us</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link" href="#info-section">Contact Us</a>
                      </li>
                  </ul>
                  </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;