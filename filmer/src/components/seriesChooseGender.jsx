import React, { useEffect, useState } from "react"
import { apiKey } from "../services/api";
import { useHistory } from "react-router"
import Styled from "./seriesChooseGender.module.css"

export default function SeriesChooseGenders(props) {
    const [lista, SetLista] = useState([])
    const history = useHistory()

    useEffect(() => {
        async function get() {
            let request = fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
            let response = (await request).json()
            let data = (await response)
            SetLista(data.genres)
        }
        get()
    }, [])



    return (

        <section className={Styled.containerSeries}>
            <h1 className={Styled.tituloSeries}>Generos</h1>
            {
                lista.map(item => (
                    <div className={Styled.childSeries} onClick={() => {
                        props.QuerySeries(item.name)
                        history.push("/series")
                    }} key={item.name}>
                        <p>{item.name}</p>
                    </div>
                ))
            }
        </section>

    )
}