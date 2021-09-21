import React from "react"
import style from "./pessoasQueVotarao.module.css"

export default function quantidadeDePessoasQueVotarao({ VotesAcurace }) {
    return (
        <div className={style.Vote}>
            <p>{new Intl.NumberFormat().format(VotesAcurace)} pessoas participarao da votação</p>
        </div>
    )
}