import React, { useState } from "react";
import "./style.css"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { Route, Link, useHistory} from "react-router-dom"

function Header(props){
    const [search, SetSearch] = useState("") 
    const history = useHistory()


return (
    <nav>
            <Route path="/detail">
                <Voltar />
            </Route>

        <div className="search">
                <input type="input" name="search" id="search" value={search} onChange={(e) => SetSearch(e.target.value)} placeholder="Pesquisar..."/>
                <button type="button" className="searchIcon" onClick={(e) => {
                    
                    e.preventDefault()
                    if(search === "" || search === undefined){
                        alert("use um termo de pesquisa valido")
                    }
                    else{
                        props.onSubmit(search)
                        console.log("header", props)
                        history.push("/pesquisar")
                    }
                     
                }}>pesquisar</button>
        </div>

            <ul className="ulNav">
                <li key={1}>
                    <a href="/">lançamentos</a>
                </li>
                        
                <li key={2}>
                    <a href="/">ver mais</a>
                </li>

                <li key={3}>
                    <a href="/series">series</a>
                </li>
                        
                <div className="iconsSocialMedia">
                    <FaFacebookF className="media facebook"/>
                    <FaInstagram className="media instagram"/>
                </div>

                </ul>
        </nav>
)

}

function Voltar(){
    return (
    <Link to="/" className="linkHeaderVoltar"><h1>Voltar</h1></Link>
    )
}
  

export default Header