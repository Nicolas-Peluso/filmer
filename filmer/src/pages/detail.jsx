import React, { useEffect, useRef } from "react";
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
        const history = useHistory();
        let count = 0;
        const er = props.MoreImages;
        console.log("detail", props)
        function handleClick() {
            const r = document.querySelectorAll("img.imagem")
            if (r.length)
                r.forEach(image => image.classList.remove(styled.ativo));

            if (count >= r.length - 1)
                count = 0;

            if (count < 0)
                count = r.length - 1;

            if (r.length)
                r[count].classList.add(styled.ativo);
        }

        useEffect(() => handleClick(), [er])

        return (
            <>
                <div className={styled.detail}>
                    {props.movie.movie_results.map((item, i) => (
                        <>
                            <div className={styled.containerImg} key={props.movie.movie_results.id} >
                                <h1>{item.original_title}</h1>

                                {props.MoreImages && props.MoreImages.backdrops &&
                                    props.MoreImages.backdrops.map(image => (
                                        <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt="desculpe nao foi possivel acessar essa imagem"
                                            className="imagem detail_ativo__2Hq9m" />
                                    ))
                                }
                                <button className={styled.anterior} onClick={() => {
                                    count -= 1
                                    handleClick()
                                }}>anterior</button>

                                <button className={styled.proximo} onClick={() => {
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

            </>
        )
    }
    return props.movie && props.credits ? Def() : <></>
}

export default Detail;