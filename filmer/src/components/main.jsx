import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import bubble from "./bubbles";
export const apiKey = "54ec0fb23647e5d3bd0095fcade09c88";
export const takevote = (vote) => (vote > 5 ? "green" : "red");

function Main(props) {
  const [list, Setlist] = useState(undefined);
  const test = [];

  useEffect(() => {
    async function fetchData() {
      let request = fetch(`https://api.themoviedb.org/3/list/3?page=1&api_key=${apiKey}&language=pt-BR`);
      let response = (await request).json();
      let data = await response;
      Setlist(data.items);
    }
    fetchData();
  }, []);

  function teste(id) {
    const favo = list.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item
    })
    Setlist(favo)
    favo.map(favoriteItem => {
      if (favoriteItem.favorite) {
        test.push(favoriteItem)
        return sessionStorage.setItem("falmesFav", JSON.stringify(test))
      }
      else
        return console.log("nada")
    })
    console.log(list)
  }

  return (
    <section className="container">

      <h1>lançamentos</h1>
      {list && bubble()}
      {list && list.map((item) => (
        <ul className="poster" key={item.id}>
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt=""
            />

            <p className="descrição">{item.overview}</p>
            <Link to="/detail">
              <button
                onClick={() => {
                  props.movie(item.id);
                  props.video(item.id);
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
            <div className="containerIcon">
              <FaRegStar
                className="favIcon"
                onClick={() => {
                  teste(item.id)
                  const a = sessionStorage.getItem("falmesFav")
                  const t = JSON.parse(a)
                  test.push([...t])
                  console.log(test)
                }}
              />

            </div>

          </li>
        </ul>
      ))}
    </section>
  );
}
export default Main;
