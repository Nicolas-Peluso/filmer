import React from "react";
import "./style.css"
import { FaSearch, FaFacebookF, FaInstagram } from "react-icons/fa"

function Header(){
    return (
        <>
            <nav>
                    <div className="search">
                        <input type="search" name="search" id="search" placeholder="Pesquisar..."/>
                        <FaSearch className="searchIcon" />
                    </div>
                
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