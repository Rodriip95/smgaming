import React from 'react'
import './style.scss'

export default function Sponsor(){
    return(
        <div id="sponsor" className="container mt-3 mb-5">
            <div className="text-center">
                <h1>Sponsors</h1>
            </div>
            <div className="d-flex justify-content-around align-items-center mt-3">
                <i class="fas fa-laptop"></i>
                <i class="fas fa-pizza-slice"></i>
                <i class="fas fa-beer"></i>
            </div>
        </div>
    )
}