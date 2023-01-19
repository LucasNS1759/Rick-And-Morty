import React from "react";
import styles from "../Abaout/Abaut.module.css"

const Abaut = () => {
  return (
    <div className={styles.Abaout}>
      <h1>Sobre mi:</h1>
      <div>
        <div>
          <img
            src="https://scontent.faep31-1.fna.fbcdn.net/v/t39.30808-6/242237324_6113556992052837_2881186247444513725_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEIDFcxhwXDB6_2-RPqmSXsryOJHbpQb22vI4kdulBvbZ8SIlvMnRoC9L8J6usYiQfff8RZFYg2DxdBj9pzWINp&_nc_ohc=RkIF0he2YncAX8HZcXX&_nc_ht=scontent.faep31-1.fna&oh=00_AfDuEVBtGmgqV2-8dv7PhmtFbmKiodnTMTxGoisYsBJ7UA&oe=63C8FA42"
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
