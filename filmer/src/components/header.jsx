import React, { useState } from "react";
import "./style.css"
import { FaSearch, FaFacebookF, FaInstagram } from "react-icons/fa"

function Header(props){
    const [search, SetSearch] = useState("") 

    return (
        <>
        <nav>
            <form className="search" onSubmit={
                e => {
                    e.preventDefault()
                    props.onSubmit(search)
                }}> 
              
              <input type="search" name="search" id="search" value={search} onChange={(e) => SetSearch(e.target.value)} placeholder="Pesquisar..."/>
              <button type="submit" className="searchIcon">
              <FaSearch className="searchIcon" />
            </button>
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
        </>
    )
}
export default Header