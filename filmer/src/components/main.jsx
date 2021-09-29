import Styled from "./main.module.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Type from "./typeWrite";
import api from "../services/api"
import Loading from "./Loading";
import Head from "./Head";
import { Context } from "../routes/router"
import TakeVote from "./TakeVote";

function Main(props) {
  const [list, Setlist] = useState(undefined);
  const [loading, setLoading] = useState(true)
  const { typeWirite, letra } = Type()
  const s = React.useContext(Context)

  useEffect(() => {
    typeWirite("lançamentos")
  }, [typeWirite])

  useEffect(() => {
    api.GetingDataForMain().then(e => {
      Setlist(e.items)
      setLoading(false)
    })
  }, [])

  return (
    <section className={Styled.container}>
      <Head title="Lançamentos" />
      <h1 className={Styled.typeWirite}>{letra}</h1>
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
            <TakeVote vote={item.vote_average} />
            <div className={Styled.containerIcon}>
            </div>
          </li>
        </ul>

      ))}

      {loading && <Loading />}
    </section>
  );
}
export default Main;
