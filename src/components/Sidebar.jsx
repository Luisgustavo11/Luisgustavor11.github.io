import { useState } from 'react';
import React from "react";
import Avatar from '../img/Foto-de-Perfil.jpeg';
import '../styles/components/sidebar.sass';
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
   const handleScrollTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

   const [imageLoaded, setImageLoaded] = useState(false);
      
   const handleImageLoad = () => {
      setImageLoaded(true);
   };
   return (
     <aside id="sidebar">

       <img 
         src={Avatar} 
         alt="Luis Gustavo" 
         class="loaded" 
         onLoad={handleImageLoad}
         className={imageLoaded ? "loaded" : ""}
       />
       <p className="title">Desenvolvedor</p>
         <SocialNetworks />
         <InformationContainer />
         <button 
         className="btn" onClick={handleScrollTop}>Voltar ao topo</button>
        </aside>
    )
}


export default Sidebar;
