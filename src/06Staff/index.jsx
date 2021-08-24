import React from 'react'
import './style.scss'
import Foto from '../images/staff.png'

export default function Staff(){
    return(
        <div id="staff" className="container mt-4">
            <div className="text-center title-staff">
                <h1>Miembros del <span>Staff</span></h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 caja-staff">
                    <div>
                        <img src={Foto} alt="foto"/>
                        <h4 className="mt-4 mb-0">Fedujas</h4>
                        <p className="staff-fun">Founder</p>
                        <p className="px-5">Lorem ipsum dolor sit ncidunt neque adipisci, at quasi repellendus perspiciatis minus asperiores?</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 caja-staff">
                    <div>
                        <img src={Foto} alt="foto"/>
                        <h4 className="mt-4 mb-0">Fedujas</h4>
                        <p className="staff-fun">Founder</p>
                        <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum rem, sit enim, architecto quod perferendis autem dolor quas voluptas quo incidunt neque adiatis minus asperiores?</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 caja-staff">
                    <div>
                        <img src={Foto} alt="foto"/>
                        <h4 className="mt-4 mb-0">Fedujas</h4>
                        <p className="staff-fun">Founder</p>
                        <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eutem dolor quas voluptas quo incidunt neque adipisci, at quasi repellendus perspiciatis minus asperiores?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}