import React, { useContext } from "react";
import ContextObjet from "../context/Contexto";

export default function PersonPage() {
  const context = useContext(ContextObjet)
  console.log(context)

  const def = () => <h1>eres idiota tico</h1>;
  ;
  const perosnDetailRight = () => {
    return (
      <div className="containerPessoa" style={{ backgroundColor: "white" }}>
        <ul
          style={{
            backgroundColor: "white",
            display: "inline-block",
            position: "absolute",
          }}
        >
          <h4>tambem conhecido como:</h4>
          {context.also_known_as.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="bio" style={{ width: "500px", margin: "0px auto" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${context.profile_path}`}
            alt=""
          />
          <p style={{ padding: "10px", fontSize: "1.2em" }}>
            {context.biography}
          </p>

          <div className="info">
            {" "}
            <br />
            <p style={{ fontSize: "1.2em", textAlign: "center" }}>
              nascido em {context.birthday}
            </p>
            <p style={{ fontSize: "1.2em" }}>
              {context.deathday !== null ? context.deathday : null}
            </p>
            <p style={{ fontSize: "1.2em" }}>
              local de nascimento {context.place_of_birth}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return !context ? def() : perosnDetailRight();
}
