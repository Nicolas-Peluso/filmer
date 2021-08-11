import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import Detail from "./detail";
import { apiKey } from "../components/main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Pesquisar from "./pesquisar";
import SeriesChooseGenders from "../components/seriesChooseGender";
import Series from "./Series";
import DetailSeries from "./seriesDetail";

function App(){
    const [data, SetData] = useState(undefined)
    const [movieDetail, setMovieDetail] = useState(undefined)
    const [VideosForDetail, setVideosForDetail] = useState(undefined)
    const [series, setSeries] = useState(undefined)
    const [seriesDetail, setSeriesDetail] = useState(undefined)

    //testar mult pesquisas

 async function onSearchSubmit (search) {
    let request = fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`)
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
    console.log(data)
}

async function getVideosForDetail (id) {
    let request = fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=pt-BR`)
    let response = (await request).json()
    let Data = (await response)
    setVideosForDetail(Data) 
    console.log("videos da func getVideos...",VideosForDetail)
}

async function getSeries (query) {
    let request = fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=pt-BR&page=1&query=${query}&include_adult=false`)
    let response = (await request).json()
    let Data = (await response)
    setSeries(Data) 
    console.log("series index", Data)
}
async function getSeriesForDetail (id){
    let request = fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`)
    let response = (await request).json()
    let Data = (await response)
    setSeriesDetail(Data)
}
    return( 
    <>
    
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
            <Route path="/series">
                    <SeriesChooseGenders QuerySeries={getSeries}/>
                    <Series series={series} serieId={getSeriesForDetail}/>
            </Route>
            <Route path="/serie/detail">
            <SeriesChooseGenders QuerySeries={getSeries}/>
            <DetailSeries seriado={seriesDetail}/>
            </Route>
    </Switch>
          <Footer />
    </Router>
    </>
    )
}

export default App