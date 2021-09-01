import React from "react";
import { Link } from "react-router-dom";
import bubble from "../components/bubbles";
import { takevote } from "../components/main";
import PageNationControls from "../components/paginationNumber";

export default function Pesquisar(props) {

  return (
    <>
      <PageNationControls TotalPage={props.TotalPage} page={props.page} />
      {console.log(props)}
      {props.data && <section className="container">
        {bubble()}
        <h1>pesquisa:</h1>
        {props.data.results.map((item) => (
          <ul className="poster" key={item.id}>
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path !== undefined
                  ? item.poster_path
                  : item.profile_path
                  }`}
                alt=""
              />
              <p className="pR">
                {item.overview !== undefined
                  ? item.overview
                  : "conecido por  " + item.known_for_department}
              </p>{" "}
              <br />
              <Link to={item.known_for !== undefined ? "/pessoa" : "/detail"}>
                <button
                  onClick={() => {
                    item.known_for !== undefined
                      ? props.pessoa(item.id)
                      : props.movie(item.id);
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
      </section>}
    </>
  );
};


