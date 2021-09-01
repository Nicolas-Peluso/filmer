import { apiKey } from "../components/main";
import React from "react"
import { sesinId } from "./GetSessionID";

function CreatList() {
    console.log(sesinId)
    const h = new Headers()
    h.append("accept", "application/json")

    async function creacting() {
        let request = fetch(`https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sesinId}`, {
            method: "POST",
            body: {
                "name": "Favorito",
                "description": "Lista de favoritos para um portifolio.",
                "language": "pt-br"
            },
            headers: h
        })
        let response = (await request).json()
        let data = (await response)
        console.log(data)
    }


    return (
        <>
            <button onClick={() => creacting()}>clique em mim</button>
        </>
    )
}

export default CreatList