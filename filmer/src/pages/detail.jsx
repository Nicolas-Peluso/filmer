import React from "react";
import { Link } from "react-router-dom";
import { takevote } from "../components/main";
import styled from "./detail.module.css"
import { useHistory } from "react-router";

function quantidadeDePessoasQueVotarao(votosPessoas) {
    return (
        <div>
            {new Intl.NumberFormat().format(votosPessoas)} pessoas participarao da votação
        </div>
    )
}
function Detail(props) {
    const history = useHistory()
    console.log(props)
    const def = () => {

        return (
            <>
                <div className={styled.detail}>
                    {props.movie.movie_results.map((item, i) => (
                        <>
                            <div className={styled.containerImg} key={props.movie.movie_results.id}>
                                <h1>{item.original_title}</h1>
                                <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="desculpe nao foi possivel carregar a imagem" className={styled.backGroundPoster} key={i + 1} />
                                <div className={styled.preview}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="desculpe nao foi possivel carregar a imagem" />
                                </div>
                                <div style={{ backgroundColor: takevote(item.vote_average), borderTop: "5px solid transparent" }} className={styled.detailVotes} key={i + 2}>
                                    <div key={i + 3}>{item.vote_average}</div>
                                </div>
                            </div>
                            <div className={styled.ContainerText} key={i + 6}>

                                <p key={i + 4} >{item.overview}</p>

                                <div key={i + 5}>
                                    {quantidadeDePessoasQueVotarao(item.vote_count)}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <h1>Atores:</h1>
                <div className={styled.slide}>
                    {props.credits.cast && props.credits.cast.map(pessoa => (
                        <ul key={Math.random()}>
                            <img src={`https://image.tmdb.org/t/p/w500/${pessoa.profile_path}`} alt="desculpe nao foi possivel carregar a imagem" />
                            <p>{pessoa.name} COMO: {pessoa.character}</p>
                            <button onClick={() => {
                                props.pessoa(pessoa.id)
                                props.personCredits(pessoa.id)
                                history.push("/pessoa")
                            }}
                            >ver mais</button>
                        </ul>
                    ))}
                </div>
                <h1>filmes similares</h1>
                <div className={styled.slide}>
                    {props.similar.results && props.similar.results.map(SimilarMovie => (
                        <ul key={Math.random()} className={styled.container}>
                            <li>
                                <img src={`https://image.tmdb.org/t/p/w500/${SimilarMovie.poster_path}`} alt="desculpe nao foi possivel carregar a imagem" />
                                <p className={styled.Description}>{SimilarMovie.overview}</p>
                                <Link to="/detail">
                                    <button
                                        onClick={() => {
                                            props.FromInsideMovie(SimilarMovie.id);
                                            props.FromInsidevideo(SimilarMovie.id);
                                            props.FromInsidecredits(SimilarMovie.id);
                                            props.FromIsidesimilar(SimilarMovie.id);
                                        }}
                                    >
                                        ver mais
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </>
        )
    }

    return props.movie && props.credits ? def() : <></>
}

export default Detail;