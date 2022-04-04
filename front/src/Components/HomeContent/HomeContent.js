import React from "react";
import { HomeContentContainer } from "./HomeContent.Styles";
import homeImage from "../../Assets/Images/home_image.svg";

export const HomeContent = () => {
  return (
    <HomeContentContainer>
      <div className="title-container">
        <h1>Programação Web</h1>
        <h2>FATEC Mogi das Cruzes</h2>
      </div>

      <div className="home-content">
         {/* <div className="text-content">
          <h2>
            Projeto voltado ao <br /> desenvolvimento front-end e <br/> back-end,
            utilizando:
          </h2>
          
          <ul>
            <li>ReactJS </li>
            <li>SpringBoot </li>
            <li>MySQL </li>
            <li>Git </li>
          </ul>
        </div> */}
        <img src={homeImage} alt="imagem da pag home" className="home-image"></img>
      </div>
    </HomeContentContainer>
  );
};
