import React from "react"
import { Link } from "react-router-dom"
import { takevote } from "../components/main"
import Styled from "./favorito.module.css"


export default function Favorito(props) {

    const fav = JSON.parse(sessionStorage.getItem("falmesFav"))
    return (


        fav && <section className={Styled.container}>
            {fav.map((item) => (
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
                            className={Styled.votacion}
                        >
                            <div>{item.vote_average}</div>
                        </div>
                    </li>
                </ul>
            ))}
        </section>
    )
}