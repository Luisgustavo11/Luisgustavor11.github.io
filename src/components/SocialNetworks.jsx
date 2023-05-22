import React from "react";
import '../styles/components/socialNetworks.sass';
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialNetworks = [
  {
    name: "linkedin", 
    icon: <FaLinkedinIn />, 
    url: "https://www.linkedin.com/in/luis-gustavo-r-de-paula-45584320a/" 
  },
  { 
    name: "github", 
    icon: <FaGithub />,
    url: "https://github.com/Luisgustavo11" 
  },
  { 
    name: "gmail", 
    icon: <SiGmail />,
    url: "luisgustavordp@gmail.com",
  },
  ];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (

         <a
           href={network.url} 
           className="social-btn" 
           id={network.name} 
           key={network.name}
           target="_blank" 
           rel="noopener noreferrer"
          >
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks;