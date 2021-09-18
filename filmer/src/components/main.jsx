import Styled from "./main.module.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../services/api";
export const takevote = (vote) => (vote > 5 ? "green" : "red");

function Main(props) {
  const [list, Setlist] = useState(undefined);
  const [letra, setLetra] = useState("")


  useEffect(() => {
    function typeWirite() {
      let elemento = "lançamentos:";
      const arrayLetras = elemento.split("")
      let TempLetra = ""
      arrayLetras.forEach((letsra, i) => {
        setTimeout(() => {
          TempLetra += letsra
          setLetra(TempLetra)
        }, 75 * i)
      })
    } typeWirite()
  }, [])

  useEffect(() => {
    async function fetchData() {
      let request = fetch(`https://api.themoviedb.org/3/list/3?page=1&api_key=${apiKey}&language=pt-BR`);
      let response = (await request).json();
      let data = await response;
      Setlist(data.items);
    }
    fetchData();
  }, []);
  return (
    <section className={Styled.container}>

      <h1 className={Styled.typeWirite}>{letra}</h1>
      {list && list.map((item) => (
        <ul className={Styled.poster} key={item.id}>
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt="desculpe nao foi possivel carregar a imagem"
            />

            <p className={Styled.descrição}>{item.overview}</p>
            <Link to="/detail">
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

            <div
              style={{
                backgroundColor: takevote(item.vote_average),
                borderTop: "5px solid transparent",
              }}
              className="votacion"
            >
              <div>{item.vote_average}</div>
            </div>
            <div className={Styled.containerIcon}>
            </div>
          </li>
        </ul>
      ))}
    </section>
  );
}
export default Main;
