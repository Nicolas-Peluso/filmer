import React, { useContext } from "react";
import { takevote } from "../components/main";
import ContextObjet from "../context/Contexto";

function quantidadeDePessoasQueVotarao(votosPessoas) {
    return (
        <div>
            {new Intl.NumberFormat().format(votosPessoas)} pessoas participarao da votação
        </div>
    )
}
function Detail() {
    const ContextDetail = useContext(ContextObjet)
    console.log("context", ContextDetail)
    const none = () => <></>

    const n = () => {
        return (
            <div className="detail" >
                {ContextDetail.movie.movie_results.map((item, i) => (
                    <>
                        <div className="containerImg" key={ContextDetail.movie.movie_results.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" className="backGroundPoster" key={i + 1} />
                            <div style={{ backgroundColor: takevote(item.vote_average), borderTop: "5px solid transparent" }} className="detailVotes" key={i + 2}>
                                <div key={i + 3}>{item.vote_average}</div>
                            </div>
                        </div>
                        <div className="ConstainerText" key={i + 6}>
                            <p key={i + 4}>{item.overview}</p>
                            <div key={i + 5}>
                                {quantidadeDePessoasQueVotarao(item.vote_count)}
                            </div>
                        </div>

                    </>
                ))}
            </div>
        )
    }
    return ContextDetail.movie ? n() : none()
}

export default Detail;