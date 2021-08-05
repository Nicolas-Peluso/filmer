import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import Deatil from "./detail";
import { apiKey } from "../components/main";

function App(){
    const [data, SetData] = useState(undefined)
    const [movieDetail, setMovieDetail] = useState(undefined)

 async function onSearchSubmit (search) {
    let request = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${search}&page=1&include_adult=false`)
    let response = (await request).json()
    let Data = (await response)
    SetData(Data) 
}
async function movieId (Id) {
    console.log("index", Id)
    let request = fetch(`https://api.themoviedb.org/3/movie/${Id}/external_ids?api_key=${apiKey}`)
    let response = (await request).json()
    let Data = (await response)
    let IdImdb = (await Data.imdb_id)
    let requestImdb = fetch(`https://api.themoviedb.org/3/find/${IdImdb}?api_key=${apiKey}&language=en-US&external_source=imdb_id`)
    let responseImdb = (await requestImdb).json()
    let data = (await responseImdb)
    setMovieDetail(data)
    
}
    return(
        <div>
        <Header onSubmit={onSearchSubmit} />
        <Main data={data} movie={movieId}/>
        <Deatil movie={movieDetail}/>
        <Footer />
        </div>
    )
}

export default App