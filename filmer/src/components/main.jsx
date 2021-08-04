import { useEffect, useState } from "react";
import React from "react";
export const apiKey = "54ec0fb23647e5d3bd0095fcade09c88";

function Main(props){

    const [list, Setlist] = useState([])
    
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/list/2?api_key=${apiKey}&language=pt-BR`)
    .then(res => res.json())
    .then(data => {
        Setlist(data.items)
        console.log("normal List",list) //temp
    })
    
},[])

useEffect(() => { // temp causador do erro 
    Setlist(props.data.results)
    console.log("props List",list) 
},[props.data]) 


function movieId(id){
    console.log(id) // temp
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
              <button onClick={() => console.log(props.data)}>valor</button>
            </section>
    )
}

export default Main