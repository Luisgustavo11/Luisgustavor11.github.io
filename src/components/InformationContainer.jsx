import React from "react";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"
import '../styles/components/informationContainer.sass'
// Informaçoes de contato

const InformationContainer = () => {
    return (
        <section id="information">
          <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(11)95930-6045</p>
            </div>
            </div>
            <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>Email</h3>
                <p>luisgustavordp@gmail.com</p>
            </div>
            </div>
            <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Itapecerica da Serra / SP</p>
            </div>
          </div>

        </section>
        
    )
}

export default InformationContainer;