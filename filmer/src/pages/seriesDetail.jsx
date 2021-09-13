import React from "react";
import { takevote } from "../components/main";

export default function DetailSeries(props) {
  const none = () => {
    return <></>;
  };
  const OnPropsOk = () => {
    const seriado = props.seriado;
    return (
      <div className="Seriesdetail">
        <div className="imageSeriesDetail">
          <img
            src={`https://image.tmdb.org/t/p/w500/${seriado.backdrop_path}`}
            alt=""
            className="backGroundPoster"
          />
          <div
            style={{
              backgroundColor: takevote(seriado.vote_average),
              borderTop: "5px solid transparent",
            }}
            className="detailVotesSeriesDetail"
          >
            <div>{seriado.vote_average}</div>
          </div>
        </div>
        <div className="serieDetailContainerText">
          <p>{seriado.overview}</p>
          <ul>
            <li>
              criado por{" "}
              <span style={{ color: "white" }}>
                {seriado.created_by.map((c) => c.name)}
              </span>
            </li>
            <br />
            <li>
              data de estreia{" "}
              <span style={{ color: "white" }}>{seriado.first_air_date}</span>
            </li>
            <br />
            <li>
              status{" "}
              <span style={{ color: "white" }}>
                {seriado.in_production ? "em produção" : "encerrado"}
              </span>
            </li>{" "}
            <br />
            <li>
              lingua original{" "}
              <span style={{ color: "white" }}>"{seriado.languages[0]}"</span>
            </li>
            <br />
            <li>
              ultimo lançamento em:{" "}
              <span style={{ color: "white" }}>{seriado.last_air_date}</span>
            </li>{" "}
            <br />
            <li className="network">
              networks :{" "}
              {seriado.networks.map((net, i) => (
                <>
                  <span style={{ color: "white" }} key={net.name}>
                    {net.name}
                    <img
                      src={`https://image.tmdb.org/t/p/w500${net.logo_path}`}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                      key={i}
                    />
                  </span>
                </>
              ))}
            </li>{" "}
            <br />
            <li>
              quantidade de episodios:{" "}
              {seriado.in_production ? "ate o momento" : ""}{" "}
              <span style={{ color: "white" }}>
                {seriado.number_of_episodes}
              </span>
            </li>{" "}
            <br />
            <li>
              nome original:{" "}
              <span style={{ color: "white" }}>{seriado.original_name}</span>
            </li>{" "}
            <br />
            <li>
              produtora:{" "}
              {seriado.production_companies.map((compane, i) => (
                <>
                  <span style={{ color: "white" }} key={compane.name}>
                    {compane.name}
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${compane.logo_path}`}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      key={i}
                    />
                  </span>
                </>
              ))}
            </li>
            <br />
            <li>
              pais de produção{" "}
              {seriado.production_countries.map((cou) => (
                <span key={cou.name}>{cou.name}</span>
              ))}
            </li>{" "}
            <br /> <br />
            <li>
              <span style={{ color: "white" }}>TEMPORADAS:</span> <br />{" "}
              {seriado.seasons.map((season, i) => (
                <div key={season.name}>
                  <div key={i}>
                    data de lançamento{" "}
                    <span style={{ color: "white" }} key={i + 2}>{season.air_date}</span>
                  </div>{" "}
                  <br />
                  <div key={i + 1}>
                    nome da temporada{" "}
                    <span style={{ color: "white" }} key={i + 3}>{season.name}</span>
                  </div>
                  <br />
                  <div key={i + 4}>
                    quantia de episodios{" "}
                    {
                      <span style={{ color: "white" }} key={i + 5}>
                        {season.episode_count}
                      </span>
                    }
                  </div>
                  <br />
                  <div key={i + 6}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                      alt=""
                      style={{
                        width: "600px",
                        height: "600px",
                        borderRadius: "",
                      }}
                      key={i + 7}
                    />
                  </div>
                  <br />
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return !props.seriado ? none() : OnPropsOk();
}
