import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/tecnologiesContainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        <div className="technology-card" id={technologies[0].id} key={technologies[0].id}>
          <DiHtml5 />
          <div className="technology-info">
            <h3>{technologies[0].name}</h3>
            <p>Linguagem de marcação para conteúdo na web.</p>
          </div>
        </div>
        <div className="technology-card" id={technologies[1].id} key={technologies[1].id}>
          <DiCss3 />
          <div className="technology-info">
            <h3>{technologies[1].name}</h3>
            <p>Estilização e formatação de páginas web modernas.</p>
          </div>
        </div>
        <div className="technology-card" id={technologies[2].id} key={technologies[2].id}>
          <DiJsBadge />
          <div className="technology-info">
            <h3>{technologies[2].name}</h3>
            <p>Linguagem de programação para desenvolvimento web interativo.</p>
          </div>
        </div>
        <div className="technology-card" id={technologies[3].id} key={technologies[3].id}>
          <DiNodejsSmall />
          <div className="technology-info">
            <h3>{technologies[3].name}</h3>
            <p>Plataforma para desenvolvimento backend escalável em JavaScript.</p>
          </div>
        </div>
        <div className="technology-card" id={technologies[4].id} key={technologies[4].id}>
          <DiMysql />
          <div className="technology-info">
            <h3>{technologies[4].name}</h3>
            <p>Sistema de gerenciamento de banco de dados relacional.</p>
          </div>
        </div>
        <div className="technology-card" id={technologies[5].id} key={technologies[5].id}>
          <DiReact />
          <div className="technology-info">
            <h3>{technologies[5].name}</h3>
            <p>Biblioteca JavaScript para construção de interfaces interativas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecnologiesContainer;
