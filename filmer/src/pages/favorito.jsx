import React from "react"
import { Link, useParams } from "react-router-dom"
import Head from "../components/Head"
import TakeVote from "../components/TakeVote"
import Styled from "./favorito.module.css"
import FavoritoButton from "../components/FavoritoButton"
import Type from "../components/typeWrite"
export default function Favorito(props) {
    const para = useParams()

    const [fav, setFav] = React.useState(JSON.parse(localStorage.getItem("favoMovie")))
    const { letra, typeWirite } = Type()
    React.useEffect(() => {
        typeWirite("sua lista de favoritos")
    }, [])
    return (
        <>
            {fav === null || undefined ?
                <h1 style={{ textAlign: "center" }}>voce nao tem filmes favoritos</h1>
                : null}
            <Head title="favorito" />
            <h1 style={{ textAlign: "center" }}>{letra}</h1>
            {fav && <section className={Styled.container}>
                {fav.map((item) => (
                    <ul className={Styled.poster} key={item.id}>
                        <li key={item.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                alt="desculpe nao foi possivel carregar a imagem"
                            />
                            <p className={Styled.descrição}>{item.overview}</p>
                            <Link to={() => {
                                if (item.known_for) {
                                    return `/pessoa/${item.id}`
                                }
                                else if (item.release_date) {
                                    return `/detail/${item.title.replace(" ", "-")}`
                                }
                                else {
                                    return `/serie/detail/${item.original_name.replace(" ", "-")}`
                                }
                            }}>
                                <button
                                    onClick={() => {
                                        if (item.known_for) {
                                            props.pessoa(item.id)
                                            props.personCredits(item.id);
                                        }
                                        else if (item.release_date) {
                                            props.movie(item.id)
                                            props.video(item.id)
                                            props.credits(item.id)
                                            props.similar(item.id);
                                            props.MoreImages(item.id);
                                        }
                                        else
                                            props.serieId(item.id)
                                    }}>ver mais</button>

                            </Link>
                            <FavoritoButton filme={item} type="excluir" setValue={setFav} />
                            <TakeVote vote={item.vote_average} />
                        </li>
                    </ul>
                ))}
            </section>}
        </>
    )
}