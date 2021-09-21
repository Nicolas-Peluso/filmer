import React, { useEffect, useState } from "react"
import api from "../services/api"
import { useHistory } from "react-router"
import Styled from "./seriesChooseGender.module.css"

export default function SeriesChooseGenders(props) {
    const [lista, SetLista] = useState([])
    const history = useHistory()

    useEffect(() => api.GetingGendersSeries().then(seriesChoose => SetLista(seriesChoose.genres)), [])

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