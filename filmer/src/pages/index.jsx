import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import Detail from "./detail";
import { apiKey } from "../components/main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Pesquisar from "./pesquisar";
import RateVote from "../components/calculaVotos";

function App(){
    const [data, SetData] = useState(undefined)
    const [movieDetail, setMovieDetail] = useState(undefined)
    const [VideosForDetail, setVideosForDetail] = useState(undefined)

 async function onSearchSubmit (search) {
    let request = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${search}&page=1&include_adult=false`)
    let response = (await request).json()
    let Data = (await response)
    SetData(Data) 

}
async function movieId (Id) {
    let request = fetch(`https://api.themoviedb.org/3/movie/${Id}/external_ids?api_key=${apiKey}`)
    let response = (await request).json()
    let Data = (await response)
    let IdImdb = (await Data.imdb_id)
    let requestImdb = fetch(`https://api.themoviedb.org/3/find/${IdImdb}?api_key=${apiKey}&language=pt-BR&external_source=imdb_id`)
    let responseImdb = (await requestImdb).json()
    let data = (await responseImdb)
    setMovieDetail(data)
}

async function getVideosForDetail (id) {
    let request = fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=pt-BR`)
    let response = (await request).json()
    let Data = (await response)
    setVideosForDetail(Data) 
    console.log("videos da func getVideos...",VideosForDetail)
}
    return(
    <Router>
        <Header onSubmit={onSearchSubmit} />
    <Switch>
            <Route exact path="/">
                <Main movie={movieId} video={getVideosForDetail}/>
            </Route>

            <Route path="/detail">
                <Detail movie={movieDetail} video={VideosForDetail}/>
            </Route>
            <Route path="/pesquisar">
                <Pesquisar data={data} movie={movieId}/>
            </Route>
    </Switch>
        <RateVote/>
          <Footer />
    </Router>
    )
}

export default App