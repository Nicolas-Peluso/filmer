import React, { useEffect, useState } from "react"
import { apiKey } from "./main"
import { useHistory } from "react-router"

export default function SeriesChooseGenders(props) {
    const [lista, SetLista] = useState([])
    const history = useHistory()

    useEffect(() =>{
        async function get(){
            let request = fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
            let response = (await request).json()
            let data = (await response)
            SetLista(data.genres)
        }
        get()
    },[])

    
    return (

        <section className="containerSeries">
            <h1 className="tituloSeries">Generos</h1>
            {
                lista.map(item => (
                    <div className="childSeries" onClick={() => {props.QuerySeries(item.name)
                        history.push("/series")
                    }}> 
                    <p>{item.name}</p>
                    </div>
                ))
            }
        </section>

    )
}