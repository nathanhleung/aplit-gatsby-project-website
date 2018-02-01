import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#top">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#about">Album</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#inspiration">Cover</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#tracklist">Lyrics</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#beats">Beats</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#website">Website</a>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      All Tracks
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Navbar;