import React from 'react'
import './style.scss'

export default function Games(){
    return(
        <div id="games" className="bg-dark pb-5">
            <div className="container">
                <h1 className="text-white text-center pt-5">Equipos</h1>
                <div className="d-flex justify-content-center row">
                    <div className="game-box col-12 col-md-6 d-flex justify-content-center">
                        <img src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo-0.png" width="300px" alt="league_of_legends" />
                    </div>
                    <div className="game-box col-12 col-md-6 d-flex justify-content-center ">
                        <img src="https://logodownload.org/wp-content/uploads/2014/09/cs-go-logo-0.png" width="300px" alt="league_of_legends" />
                    </div>
                </div>
                <div className="d-flex justify-content-center row">
                    <div className="game-box col-12 col-md-6 d-flex justify-content-center ">
                        <img src="https://logodownload.org/wp-content/uploads/2020/06/valorant-logo-0.png" width="300px" alt="league_of_legends" />
                    </div>
                    <div className="game-box col-12 col-md-6 d-flex justify-content-center ">
                        <img src="https://logodownload.org/wp-content/uploads/2018/04/fortnite-logo-0.png" width="300px" alt="league_of_legends" />
                    </div>
                </div>
            </div>
        </div>
    )
}