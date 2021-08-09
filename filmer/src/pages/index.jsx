import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import Detail from "./detail";
import { apiKey } from "../components/main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

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
    let requestImdb = fetch(`https://api.themoviedb.org/3/find/${IdImdb}?api_key=${apiKey}&language=pt-BR&external_source=imdb_id`)
    let responseImdb = (await requestImdb).json()
    let data = (await responseImdb)
    setMovieDetail(data)
    
}
    return(
    <Router>

        <Header onSubmit={onSearchSubmit} />
        <Switch>
            <Route exact path="/">
                <Main data={data} movie={movieId}/>
            </Route>
            <Route path="/detail">
            <Detail movie={movieDetail}/>
            </Route>
        </Switch>
        <Footer />

    </Router>
    )
}

export default App