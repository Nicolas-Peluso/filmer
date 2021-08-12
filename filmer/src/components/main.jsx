import { useEffect, useState } from "react";
import React from "react";
import { Link} from "react-router-dom";
export const apiKey = "54ec0fb23647e5d3bd0095fcade09c88";

export function takevote(vote) {
    if(vote > 5){
        return "green"
    }
    else{
        return "red"
    }
}

function Main(props){
    const [list, Setlist] = useState([]) 

useEffect(() => {
    async function fetchData(){
    let request = fetch(`https://api.themoviedb.org/3/list/3?page=1&api_key=${apiKey}&language=pt-BR`)
    let response = (await request).json()
    let data = (await response)
    Setlist(data.items)
    console.log(data)
}
fetchData()
}, [])


return (
            <section className="lançamentos">

                <h1>lançamentos</h1>
                {
                    list.map(item => (
                    <ul className="poster">
                        
                        <li key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                            <p>{item.overview}</p>
                            <Link to="/detail">
                                <button onClick={() => {
                                    props.movie(item.id)
                                    props.video(item.id)    
                                    }}>ver mais</button>
                            </Link>
                            <div style={{backgroundColor: takevote(item.vote_average),borderTop: "5px solid transparent" }} className="votacion">
                                    <div>{item.vote_average}</div>
                            </div>
                        </li>
                    </ul>   
                    ))
                }
        </section>
)    
  
}
export default Main