import React, { useState } from "react";
import "./style.css"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

function Header(props){
    const [search, SetSearch] = useState("") 
    
    return (
        <nav>
            <Route path="/detail">
                <Voltar />
            </Route>   
            
            <form className="search" onSubmit={
                e => {
                    e.preventDefault()
                    props.onSubmit(search)
                }}> 
              
              <input type="search" name="search" id="search" value={search} onChange={(e) => SetSearch(e.target.value)} placeholder="Pesquisar..."/>
              <button type="submit" className="searchIcon">pesquisar</button>

            
            </form>

                <ul className="ulNav">
                        <li>
                            <a href="#">lançamentos</a>
                        </li>
                        
                        <li>
                            <a href="#">ver mais</a>
                        </li>

                        <li>
                            <a href="#">series</a>
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