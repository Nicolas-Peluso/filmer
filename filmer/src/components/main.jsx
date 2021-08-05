import { useEffect, useState } from "react";
import React from "react";
export const apiKey = "54ec0fb23647e5d3bd0095fcade09c88";

function Main(props){

    const [list, Setlist] = useState([])
    const [Id, setId] = useState("")

useEffect(async () => {
    let request = fetch(`https://api.themoviedb.org/3/list/3?page=1&api_key=${apiKey}&language=pt-BR`)
    let response = (await request).json()
    let data = (await response)
    Setlist(data.items)    
}, [])

useEffect(() =>{
    console.log("effect", Id)
},[Id])

function movieId(id){
    setId(id)
    props.movie(Id)
}

const def = () => {
return (
            <section className="lançamentos">
                <h1>lançamentos</h1>
                {
                    list.map(item => (
                    <ul className="poster">
                        <li key={item.title}>
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
const SearchReady = () => {
    return (
        <section className="lançamentos">
                <h1>pesquisa:</h1>
                {
                    props.data.results.map(item => (
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

return !props.data ? def() : SearchReady()
    
}

export default Main