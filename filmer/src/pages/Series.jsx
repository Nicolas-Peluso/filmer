import React from "react";
import { takevote } from "../components/main";
import { Link } from "react-router-dom";
import Style from "./Series.module.css"

export default function Series(props) {
  console.log("props series", props);

  const OnPropsOk = () => {
    return (
      <>
        <section className={Style.container}>
          <h1>SERIES</h1>
          {props.series.results.map((item) => (
            <ul className={Style.poster} key={item.id}>
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt="desculpe nao foi possivel carregar a imagem"
                />
                <p className={Style.descricao}>{item.overview}</p>
                <Link to="/serie/detail">
                  <button
                    onClick={() => {
                      props.serieId(item.id);
                    }}
                  >
                    ver mais
                  </button>
                </Link>
                <div
                  style={{
                    backgroundColor: takevote(item.vote_average),
                    borderTop: "5px solid transparent",
                  }}
                  className={Style.votacion}
                >
                  <div>{item.vote_average}</div>
                </div>
              </li>
            </ul>
          ))}
        </section>
      </>
    );
  };
  const padrão = () => {
    return <></>;
  };

  return props.series === undefined ? padrão() : OnPropsOk();
}
