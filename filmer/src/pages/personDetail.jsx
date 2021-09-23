import React, { useContext } from "react";
import { useParams } from "react-router";
import ContextObjet from "../context/Contexto";
import Style from "./personDetail.module.css"


export default function PersonPage(props) {
  const context = useContext(ContextObjet)
  const para = useParams()
  console.log("i am", para)
  const def = () => <h1>eres idiota tico</h1>;
  ;
  const perosnDetailRight = () => {
    console.log("context", context)
    console.log("pessoas", props)
    return (
      <div className={Style.containerPessoa}>
        <ul className={Style.OtherNames}>
          <h4>tambem conhecido como:</h4>
          {context.also_known_as.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className={Style.bio}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${context.profile_path}`}
            alt="desculpe nao foi possivel carregar a imagem"
          />
          <p>
            {context.biography}
          </p>

          <div className={Style.info}>
            {" "}
            <br />
            <p>
              nascido em {context.birthday}
            </p>
            <p>
              {context.deathday !== null ? context.deathday : null}
            </p>
            <p>
              local de nascimento {context.place_of_birth}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return !context ? def() : perosnDetailRight();
}
