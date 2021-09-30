import Styled from "./main.module.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Type from "./typeWrite";
import api from "../services/api"
import Loading from "./Loading";
import Head from "./Head";
import TakeVote from "./TakeVote";
import FavoritoButton from "./FavoritoButton";

function Main(props) {
  const [list, Setlist] = useState(undefined);
  const [loading, setLoading] = useState(true)
  const { typeWirite, letra } = Type()
  const [comingSon, setComingSon] = useState(undefined)

  useEffect(() => {
    typeWirite("lançamentos")
  }, [typeWirite])

  useEffect(() => {
    api.GetingDataForMain().then(e => {
      console.log(e)
      Setlist(e.results)
      setLoading(false)
    })

    api.GetingUpcomingMovies().then(e => {
      console.log(e)
      setComingSon(e)
    })
  }, [])

  return (
    <>
      <h1 className={Styled.typeWirite}>{letra}</h1>
      <section className={Styled.container}>
        <Head title="Lançamentos" />
        {list && list.map((item) => (
          <ul className={Styled.poster} key={item.id}>
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt="desculpe nao foi possivel carregar a imagem"
              />
              <p className={Styled.descrição}>{item.overview}</p>
              <Link to={`/detail/${item.title.replace(" ", "-")}`}>
                <button
                  onClick={() => {
                    props.movie(item.id);
                    props.video(item.id);
                    props.credits(item.id);
                    props.similar(item.id);
                    props.MoreImages(item.id)
                  }}
                >
                  ver mais
                </button>
              </Link>
              <FavoritoButton type="favorito" filme={item} />
              <TakeVote vote={item.vote_average} />
              <div className={Styled.containerIcon}>
              </div>
            </li>
          </ul>

        ))}

        {loading && <Loading />}
      </section>

      {comingSon !== undefined && <h3 className={Styled.typeWirite}>lançados entre: {comingSon.dates.minimum} e {comingSon.dates.maximum}</h3>}
      <section className={Styled.container}>
        {comingSon && comingSon.results.map(filme => (
          <ul className={Styled.poster} key={filme.id}>
            <li key={filme.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                alt="desculpe nao foi possivel carregar a imagem"
              />
              <p className={Styled.descrição}>{filme.overview}</p>
              <Link to={`/detail/${filme.title.replace(" ", "-")}`}>
                <button
                  onClick={() => {
                    props.movie(filme.id);
                    props.video(filme.id);
                    props.credits(filme.id);
                    props.similar(filme.id);
                    props.MoreImages(filme.id)
                  }}
                >
                  ver mais
                </button>
              </Link>
              <FavoritoButton type="favorito" filme={filme} />
              <TakeVote vote={filme.vote_average} />
              <div className={Styled.containerIcon}>
              </div>
            </li>
          </ul>
        ))}
      </section>
    </>
  );
}
export default Main;
