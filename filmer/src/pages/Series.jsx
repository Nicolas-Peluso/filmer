import React, { useEffect } from "react";
import TakeVote from "../components/TakeVote";
import { Link } from "react-router-dom";
import Style from "./Series.module.css"
import Type from "../components/typeWrite";
import Head from "../components/Head";
import FavoritoButton from "../components/FavoritoButton";

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
                <FavoritoButton type="favorito" filme={item} />
                <TakeVote vote={item.vote_average} />
              </li>
            </ul>
          ))}
        </section>
      </>
    );
  };

  return props.series ? OnPropsOk() : <></>;;
}
