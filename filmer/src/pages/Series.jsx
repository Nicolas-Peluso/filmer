import React, { useEffect } from "react";
import { takevote } from "../components/main";
import { Link } from "react-router-dom";
import Style from "./Series.module.css"
import Type from "../components/typeWrite";
import Head from "../components/Head";

export default function Series(props) {
  const { typeWirite, letra } = Type()
  useEffect(() => {
    typeWirite("series")
  }, [typeWirite])

  const OnPropsOk = () => {
    return (
      <>
        <section className={Style.container}>
          <Head title="Series" />
          <h1 className={Style.typeWirite}>{letra}</h1>
          {props.series.results.map((item) => (
            <ul className={Style.poster} key={item.id}>
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt="desculpe nao foi possivel carregar a imagem"
                />
                <p className={Style.descricao}>{item.overview}</p>
                <Link to={`/serie/detail/${item.original_name.replace(" ", "-")}`}>
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

  return props.series ? OnPropsOk() : <></>;;
}
