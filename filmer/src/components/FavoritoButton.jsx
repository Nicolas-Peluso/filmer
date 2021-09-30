import React from 'react'
import SettingFavorite from './SettingFavorite'
import FavoOn from "../svg/favoritoOn.svg"
import FavoOff from "../svg/favoritoOff.svg"

function FavoritoButton({ filme, type, setValue }) {
    const { saveMovie, Deletar } = SettingFavorite()

    function save(filme) {
        filme.favoritoOn = true;
        saveMovie("favoMovie", filme)
    }
    function Delet(filme) {
        Deletar("favoMovie", filme)
        filme.favoritoOn = false;
        setValue(JSON.parse(localStorage.getItem("favoMovie")))
    }

    return (
        <input onClick={type === "favorito" ? () => save(filme) : () => Delet(filme)}
            style={{
                backgroundImage: filme.favoritoOn ? `url(${FavoOn})` : `url(${FavoOff})`,
                textIndent: "-150px", width: "65px", height: "65px", backgroundRepeat: "no-repeat",
                position: "absolute", bottom: "0px", right: "0px", backgroundSize: "cover", borderRadius: "50%",
                objectFit: 'cover'
            }} type="submit" />
    )
}

export default FavoritoButton
