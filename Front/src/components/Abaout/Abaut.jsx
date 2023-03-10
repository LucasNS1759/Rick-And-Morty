import React from "react";
import styles from "../Abaout/Abaut.module.css"



const Abaut = () => {
  return (
    <div className={styles.Abaout}>
      <h1>Sobre mi:</h1>
      <div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/113627748?v=4"
            alt=""
          />
        </div>
        <p>
          Me llamo Lucas, tengo 27 años, vivo en Buenos Aires Argentina, estoy
          cursando un bootcamp full stack en: 
           <a
            href="http://soyHenry.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoyHenry
          </a>,
          nunca antes nada me habia despertado tanta pasion y ganas de aprender como es el mundo de la programacion, <br/> si bien este mundo es muy frustrante y exigente, ya que nunca vas a dejar de aprender cosas nuevas, es increiblemente satisfactorio a su vez.<br/> Espero poder seguir aprendiendo y creciendo en este mundo de la tecnologia y poder cambiar mi vida de la mano de la programacion.
          
        </p>
      </div>
    </div>
  );
};

export default Abaut;
