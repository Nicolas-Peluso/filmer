import React from "react"
import style from "./pessoasQueVotarao.module.css"

export default function QuantidadeDePessoasQueVotarao({ VotesAcurace }) {
    return (
        <div className={style.Vote}>
            <p>{new Intl.NumberFormat().format(VotesAcurace)} pessoas participarao da votação</p>
        </div>
    )
}