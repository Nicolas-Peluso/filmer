import React, { useState } from "react";
import "./style.css"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { Route, Link, useHistory } from "react-router-dom"

function Header(props) {
    const [search, SetSearch] = useState("")
    const [Type, SetType] = useState("movie")
    const warningKey = ["<", ">"]
    const history = useHistory()

    function handleSubit(e) {
        e.preventDefault()
        warningKey.map(i => {
            if (search.includes(i) || search === "" || search === undefined) {
                alert("nao permitimos buscas com: ''(aspas), <>(maior ou igual)")
            }
            else {
                props.onSubmit({ search: search, type: Type })
                console.log("header", props)
                history.push("/pesquisar")
            }
        })
    }
    function handleChange(e) {
        const { target } = e
        SetSearch(target.value)
    }
    return (
        <nav>
            <Route path="/detail">
                <Voltar />
            </Route>

            <form className="search" onSubmit={handleSubit}>
                <input type="input" name="search" id="search" onChange={handleChange} placeholder={`pesquisar por `} />
                <select id="" onChange={e => SetType(e.target.value)}>
                    <option value="movie">filme</option>
                    <option value="tv">serie</option>
                    <option value="person">pessoa</option>
                </select>
                <button type="submit" className="searchIcon" >pesquisar</button>

            </form>

            <ul className="ulNav">
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
                    <Link to="/series">series</Link>
                </li>

                <div className="iconsSocialMedia">
                    <FaFacebookF className="media facebook" />
                    <FaInstagram className="media instagram" />
                </div>

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