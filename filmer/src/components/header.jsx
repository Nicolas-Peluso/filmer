import React, { useState } from "react";
import Styled from "./header.module.css"
import "./style.css"
import { Route, Link, useHistory } from "react-router-dom"

function Header(props) {
    console.log(Styled)
    const [search, SetSearch] = useState("")
    const [Type, SetType] = useState("movie")
    const warningKey = ["<", ">", "<>", "'", "''"]
    const history = useHistory()

    function handleSubit(e) {
        e.preventDefault()
        if (warningKey.includes(search) || search === "" || search === undefined) {
            alert("nao permitimos buscas com: ''(aspas), <>(maior ou igual)")
        }
        else {
            props.onSubmit({ search: search, type: Type })
            console.log("header", props)
            history.push(`/pesquisar/${search.replace(" ", "-")}`)
        }
    }

    function handleChange(e) {
        const { target } = e
        SetSearch(target.value)
    }
    return (
        <nav className={Styled.Nav}>
            <Route path="/detail">
                <Voltar />
            </Route>

            <form className={Styled.search} onSubmit={handleSubit}>
                <input type="input" name="search" id="search" onChange={handleChange} placeholder={`pesquisar por `} />
                <select onChange={e => SetType(e.target.value)}>
                    <option value="movie">filme</option>
                    <option value="tv">serie</option>
                    <option value="person">pessoa</option>
                </select>
                <button type="submit">pesquisar</button>
            </form>

            <ul className={Styled.ulNav}>
                <li key={-1}>
                    <Link to="/Create/List">criar Lista</Link>
                </li>

                <li key={1}>
                    <Link to="/">lançamentos</Link>
                </li>

                <li key={2}>
                    <Link to="/favoritos">favoritos</Link>
                </li>

                <li key={3}>
                    <Link to={`/series/ChooseGender`}>series</Link>
                </li>

            </ul>
        </nav>
    )

}

function Voltar() {
    return (
        <Link to="/" className="linkHeaderVoltar"><h1>Voltar</h1></Link>
    )
}


export default Header