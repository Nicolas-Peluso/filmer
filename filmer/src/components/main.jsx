import { useEffect, useState } from "react";
import React from "react";

function Main(){
const apiKey = "54ec0fb23647e5d3bd0095fcade09c88";

    const [list, Setlist] = useState([])

    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/list/2?api_key=${apiKey}&language=pt-BR`)
    .then(res => res.json())
    .then(data => Setlist(data.items))
        console.log(list)
},[])

function movieId(id){
    console.log(id)
}
    return (
                <section className="lançamentos">
                    <h1>lançamentos</h1>
                    {
                        list.map(item => (
                        <ul className="poster">

                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                                <p>{item.overview}</p>
                                <button onClick={() => movieId(item.id)}>ver mais</button>
                            </li>

                        </ul>   
                        ))
                    }
            </section>
    )
}

export default Main