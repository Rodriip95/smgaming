import React, { useState } from 'react'
import LogoSMG from '../images/white.png'
import './style.scss'

export default function Navbar(){
    const [click, setClick] = useState(false)
    return(
        <nav class="navbar navbar-expand-lg navbar-light w-100">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src={LogoSMG} alt="" width="72px"/>
            </a>
            <button onClick={()=>setClick(!click)} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {
                    click ?
                        <i class="fas fa-times"></i>
                    :
                        <i class="fas fa-bars"></i>
                }
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link smg-itm" href="#">San Miguel Gaming</a>
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