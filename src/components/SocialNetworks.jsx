import React from "react";
import '../styles/components/socialNetworks.sass';
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },
    { name: "gmail", icon: <SiGmail /> },
  ];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href="#" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks;