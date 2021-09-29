import React from "react"
import { Link } from "react-router-dom"
import Head from "../components/Head"
import TakeVote from "../components/TakeVote"
import Styled from "./favorito.module.css"


export default function Favorito(props) {

    const fav = JSON.parse(sessionStorage.getItem("falmesFav"))
    return (

        <>
            <Head title="favorito" />
            {fav && <section className={Styled.container}>
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
                            <TakeVote vote={item.vote_average} />
                        </li>
                    </ul>
                ))}
            </section>}
            <h1 style={{ textAlign: "center" }}>voce nao tem filmes favoritos</h1>
        </>
    )
}