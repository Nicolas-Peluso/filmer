import React from "react";
import { takevote } from "../components/main";

function quantidadeDePessoasQueVotarao(votosPessoas) {
    return (
        <div>
            {new Intl.NumberFormat().format(votosPessoas)} pessoas participarao da votação
        </div>
    )
}
function Detail(props) {
    console.log(props.series !== undefined ? "serie" : "movie")
    const none = () => {
        return (
            <>
            </>
        )
    }
    const n = () => {
        console.log("filme", props)
        return (
            <div className="detail" key={props.movie.movie_results.id}>
                {props.movie.movie_results.map(item => (
                    <>
                        <div className="containerImg">
                            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" className="backGroundPoster" />
                            <div style={{ backgroundColor: takevote(item.vote_average), borderTop: "5px solid transparent" }} className="detailVotes">
                                <div>{item.vote_average}</div>
                            </div>
                        </div>
                        <div className="ConstainerText">
                            <p>{item.overview}</p>
                            <div>
                                {quantidadeDePessoasQueVotarao(item.vote_count)}
                            </div>
                        </div>

                    </>
                ))}
            </div>
        )
    }
    return !props.movie ? none() : n()
}

export default Detail;