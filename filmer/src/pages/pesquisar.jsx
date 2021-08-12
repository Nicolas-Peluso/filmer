import React from "react";
import {Link} from "react-router-dom"
import { takevote } from "../components/main";

export default function Pesquisar(props){

    const n = () =>{
        return <h1 style={{color: "red", textAlign: "center"}}>voce deve inserir um termo de pesquisa valido</h1>
    }

    const seacrh =  () =>  {

    return (
        <>
            <section className="lançamentos">
                <h1>pesquisa:</h1>
                {
                    
                    props.data.results.map(item => (
                    <ul className="poster" >
                        <li key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                            <p>{item.overview}</p>
                                <Link to="/detail">
                                    <button onClick={() => {
                                        props.movie(item.id)}}>ver mais</button>
                                </Link>
                                <div style={{backgroundColor: takevote(item.vote_average),borderTop: "5px solid transparent" }} className="votacion">
                                    <div>{item.vote_average}</div>
                            </div>
                        </li>
                    </ul>   
                    ))
                }
        </section>
        </>
    )}

return props.data === undefined ? n() : seacrh()
}
