import React from "react";
import { useHistory } from "react-router";
import Style from "./Slide.module.css"
import TakeVote from "./TakeVote";
export default function Slide(props) {
    console.log("Slide", props)
    const history = useHistory()

    return (
        <>
            {props.tittle && <h1 className={Style.titlleList}>{props.tittle}:</h1>}
            <div className={Style.slide}>
                {props.Slide && props.Slide.map(pessoa => (
                    <ul key={Math.random()}>
                        <img src={`https://image.tmdb.org/t/p/w500/${pessoa.profile_path ? pessoa.profile_path : pessoa.poster_path}`} alt="desculpe nao foi possivel carregar a imagem" />
                        {pessoa.poster_path && <TakeVote vote={pessoa.vote_average} />}
                        {pessoa.name ?
                            <p>{pessoa.name} COMO:
                                {pessoa.character}</p> : <p className={Style.Description}>{pessoa.overview} COMO:
                                {pessoa.character}</p>}

                        <button onClick={() => {
                            if (pessoa.name) {
                                props.pessoa(pessoa.id)
                                props.personCredits(pessoa.id)
                                history.push(`/pessoa/${pessoa.name}`)
                            }
                            else if (pessoa.title) {
                                props.movie(pessoa.id);
                                props.video(pessoa.id);
                                props.credits(pessoa.id)
                                props.similar(pessoa.id);
                                props.MoreImages(pessoa.id)
                                history.push(`/detail/${pessoa.title.replace(" ", "-")}`)
                            }
                        }}
                        >ver mais</button>
                    </ul>
                ))}
            </div>
        </>
    )
}
