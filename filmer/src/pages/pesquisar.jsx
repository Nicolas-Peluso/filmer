import React from "react";
import {Link} from "react-router-dom"
import { takevote } from "../components/main";

export default function Pesquisar(props){

    const n = () =>{
        return <h1 style={{color: "red", textAlign: "center"}}>voce deve inserir um termo de pesquisa valido</h1>
    }
    const seacrh =  () =>  {
        console.log("pesquisar", props)
    return (
        <>
            <section className="container">
                <h1>pesquisa:</h1>
                {   
                    props.data.results.map(item => (
                    <ul className="poster" >
                        <li key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path !== undefined ? item.poster_path : item.profile_path}`} alt=""/>
                            <p className="pR">{item.overview !== undefined ? item.overview :"conecido por  " + item.known_for_department}</p> <br />
                            {item.known_for !== undefined ? (<h1 style={{color: "wheat"}}>{item.name}</h1> ) : null} 
                            {item.known_for !== undefined ? ((item.known_for.map(k => <ul className="textoPessoas">
                            <li style={{position: "absolute", bottom: "50px"}} key={item.id}><p>{k.title}</p></li> 
                            </ul>))) : null} 
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
