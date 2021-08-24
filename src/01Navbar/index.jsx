import React from 'react'

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light w-100" style={{position:"absolute", backgroundColor:"rgba(255,255,255,0.5)"}}>
        <div class="container">
            <a class="navbar-brand" href="#">San Miguel Gaming</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Content</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Games</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">GH</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}