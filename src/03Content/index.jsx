import React from 'react'
import './style.scss'

export default function Content(){
    return(
        <div>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-12 col-lg-8 text-center px-3">
                        <h1>Somos San Miguel Gaming</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam reiciendis cum, alias, laborum omnis at libero quas ipsa doloribus iure? Consequuntur magnam quos a dolores provident soluta? Reiciendis, repudiandae.</p>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-around">
                <div className="m-5 text-center">
                    <i class="fas fa-gamepad"></i>
                    <h3>Gaming</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eligendi minus amet maiores ipsa totam voluptas perferendis ecepturi.</p>
                </div>

                <div className="m-5 text-center">
                    <i class="fas fa-trophy"></i>
                    <h3>Gaming</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eligendi minus amet maiores ipsa totam voluptas perferendis ecepturi.</p>
                </div>

                <div className="m-5 text-center">
                    <i class="fas fa-users"></i>
                    <h3>Gaming</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eligendi minus amet maiores ipsa totam voluptas perferendis excepturi.</p>
                </div>
            </div>

        </div>
    )
}