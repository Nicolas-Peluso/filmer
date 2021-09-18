import React from "react";
import { Link } from "react-router-dom";
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
    const Def = () => {
        const history = useHistory()
        let count = 0

        function handleClick() {
            const r = document.querySelectorAll("img.imagem")
            r.forEach(image => image.classList.remove(styled.ativo))
            if (count >= r.length - 1)
                count = 0

            if (count < 0)
                count = r.length - 1

            r[count].classList.add(styled.ativo)
        }

        return (
            <>
                <div className={styled.detail}>
                    {props.movie.movie_results.map((item, i) => (
                        <>
                            <div className={styled.containerImg} key={props.movie.movie_results.id} >
                                <h1>{item.original_title}</h1>

                                {props.MoreImages &&
                                    props.MoreImages.backdrops.map(image => (
                                        <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt="desculpe nao foi possivel acessar essa imagem"
                                            className="imagem" />
                                    ))

                                }
                                <button className={styled.anterior} onClick={() => {
                                    count -= 1
                                    handleClick()
                                }}>anterior</button>
                                <button className={styled.proximo}
                                    onClick={() => {
                                        count += 1
                                        handleClick()
                                    }}
                                >proximo</button>
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
                <h1 className={styled.titlleList}>Atores:</h1>
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
                <h1 className={styled.titlleList}>filmes similares:</h1>
                <div className={styled.slide}>
                    {props.similar && props.similar.results.map(SimilarMovie => (
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
                                            props.FromMoreImages(SimilarMovie.id);
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

    return props.movie && props.credits ? Def() : <></>
}

export default Detail;