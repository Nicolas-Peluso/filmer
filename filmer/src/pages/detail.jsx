import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import Head from "../components/Head";
import QuantidadeDePessoasQueVotarao from "../components/pessoasQueVotarao";
import TakeVote from "../components/TakeVote";
import styled from "./detail.module.css"

function Detail({ movie, MoreImages, credits }) {
    const Def = () => {
        const params = useParams()

        let count = 0;

        const handleClick = useCallback(() => {
            const images = document.querySelectorAll("img.imagem")
            if (images.length)
                images.forEach(image => image.classList.remove(styled.ativo));

            if (count >= images.length - 1) //eslint-disable-next-line
                count = 0;

            if (count < 0)// eslint-disable-next-line

                count = images.length - 1;

            if (images.length)
                images[count].classList.add(styled.ativo);
            return count
        }, [])

        useEffect(() => {
            handleClick()
        }, [handleClick])

        console.log(MoreImages)
        return (
            <>
                <Head title="Detalhe" />
                <div className={styled.detail}>
                    {movie.movie_results.map((item, i) => (
                        <>
                            <div className={styled.containerImg} key={movie.movie_results.id} >
                                <h1>{item.original_title}</h1>

                                {MoreImages && MoreImages.backdrops &&
                                    MoreImages.backdrops.map((image, i) => (
                                        <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt="desculpe nao foi possivel acessar essa imagem"
                                            className="imagem" key={i} />
                                    ))
                                }
                                <button className={styled.anterior} onClick={() => {
                                    count -= 1
                                    handleClick()
                                }} key={Math.random()}>anterior</button>

                                <button className={styled.proximo} onClick={() => {
                                    count += 1
                                    handleClick()
                                }} key={Math.random()}
                                >proximo</button>
                            </div>
                            <div className={styled.ContainerText} key={i + 6}>

                                <p key={i + 4} >{item.overview}</p>

                                <QuantidadeDePessoasQueVotarao VotesAcurace={item.vote_count} />
                                <TakeVote vote={item.vote_average} width={150} heigth={150} fontSize={1.1} />
                            </div>
                        </>
                    ))}
                </div>
            </>
        )
    }
    return movie && credits ? Def() : <></>
}

export default Detail;