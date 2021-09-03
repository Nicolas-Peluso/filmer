import React from "react";
import { takevote } from "../components/main";
import { Link } from "react-router-dom";
import bubble from "../components/bubbles";

export default function Series(props) {
  console.log("props series", props);

  const OnPropsOk = () => {
    return (
      <>
        {props.series.results.length && bubble()}
        <section className="container">
          <h1>SERIES</h1>
          {props.series.results.map((item) => (
            <ul className="poster" key={item.id}>
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                />
                <p>{item.overview}</p>
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
                  className="votacion"
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
