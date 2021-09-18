import React from "react";
import { Link } from "react-router-dom";
import { takevote } from "../components/main";
import PageNationControls from "../components/paginationNumber";
import Style from "./pesquisar.module.css"
export default function Pesquisar(props) {

  return (
    <>
      {props.data && <>
        <PageNationControls TotalPage={props.TotalPage} page={props.page} />
        <section className={Style.container}>

          <h1>pesquisa:</h1>

          {props.data.results.map((item) => (
            <ul className={Style.poster} key={item.id}>
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path !== undefined
                    ? item.poster_path
                    : item.profile_path
                    }`}
                  alt="desculpe nao foi possivel carregar a imagem"
                />
                <p className={Style.descricao}>
                  {item.overview !== undefined
                    ? item.overview
                    : "conecido por  " + item.known_for_department}
                </p>{" "}
                <br />
                <Link to={() => {
                  if (item.known_for) {
                    return '/pessoa'
                  }
                  else if (item.release_date) {
                    return '/detail'
                  }
                  else {
                    return '/serie/detail'
                  }
                }
                }>
                  <button
                    onClick={() => {
                      if (item.known_for) {
                        props.pessoa(item.id)
                        props.personCredits(item.id);
                      }
                      else if (item.release_date) {
                        props.movie(item.id)
                        props.video(item.id)
                        props.credits(item.id)
                        props.similar(item.id);
                        props.MoreImages(item.id);
                      }
                      else
                        props.serieId(item.id)
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
                  className="votacion"
                >
                  <div>{item.vote_average}</div>
                </div>
              </li>
            </ul>
          ))}
        </section></>}
    </>
  );
};


