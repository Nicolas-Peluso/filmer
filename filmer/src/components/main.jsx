import { useEffect, useState, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
export const apiKey = "54ec0fb23647e5d3bd0095fcade09c88";
export const takevote = (vote) => (vote > 5 ? "green" : "red");

function Main(props) {
  const [list, Setlist] = useState([]);
  const test = [];

  useEffect(() => {
    async function fetchData() {
      let request = fetch(
        `https://api.themoviedb.org/3/list/3?page=1&api_key=${apiKey}&language=pt-BR`
      );
      let response = (await request).json();
      let data = await response;
      Setlist(data.items);
      console.log(data.items);
    }

    fetchData();
  }, []);


  function teste(id) { //função responsssavel por filtrar se o fav ja existe e por setar ele no sessionStorage
    const favo = list.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item
    })
    Setlist(favo)
    favo.map(favoriteItem => {
      if (favoriteItem.favorite) {
        test.push(favoriteItem)
        sessionStorage.setItem("falmesFav", JSON.stringify(test))
      }
      else
        console.log("nada")
    })
    console.log(list)
  }

  return (
    <section className="container">
      <h1>lançamentos</h1>
      {list.map((item, i) => (
        <ul className="poster">
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
