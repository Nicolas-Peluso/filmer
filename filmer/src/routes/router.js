import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import Detail from "../pages/detail";
import { apiKey } from "../components/main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Pesquisar from "../pages/pesquisar";
import SeriesChooseGenders from "../components/seriesChooseGender";
import Series from "../pages/Series";
import DetailSeries from "../pages/seriesDetail";
import PageNationControls from "../components/paginationNumber.jsx";
import PersonPage from "../pages/personDetail";
import Favorito from "../pages/favorito";
import api from "../services/api"
import CreatList from "../post/CreatList";

function Rotas() {

    const [data, SetData] = useState(undefined)
    const [movieDetail, setMovieDetail] = useState(undefined)
    const [VideosForDetail, setVideosForDetail] = useState(undefined)
    const [series, setSeries] = useState(undefined)
    const [seriesDetail, setSeriesDetail] = useState(undefined)
    const [Totalpages, setTotalPages] = useState(undefined)
    const [GetingQuerryFromHeader, setGetingQuerryFromHeader] = useState(undefined)
    const [GetingQuerryFromSeries, setGetingQuerryFromSeries] = useState(undefined)
    const [Type, setGetType] = useState(undefined)
    const [PersonData, setPerson] = useState(undefined)
    const [page, setPage] = useState(undefined)

    useEffect(() => SetData(page), [page])

    const FromHeader = (search) => {
        setGetingQuerryFromHeader(search.search)
        setGetType(search.type)
        api.onSearchSubmit(search).then(data => {
            SetData(data)
            setTotalPages(data.total_pages)
        })
    }

    const GetMovieId = (id) => {
        api.movieId(id).then(data => {
            setMovieDetail(data)
        })
    }

    const GetVideosForDetail = (id) => {
        api.getVideosForDetail(id).then(data => {
            setVideosForDetail(data)
        })
    }

    const getSeries = (query) => {
        setGetingQuerryFromSeries(query)
        api.getSeries(query).then(data => {
            setSeries(data)
            setTotalPages(data.total_pages)
        })
    }
    const getSeriesForDetail = (query) => {
        api.getSeriesForDetail(query).then(data => {
            setSeriesDetail(data)
        })
    }
    const GetPerson = (id) => {
        api.person(id).then(data => {
            setPerson(data)

        })
    }

    async function PaginationForSearch(page) {
        let search = (await GetingQuerryFromHeader)
        let request = fetch(`https://api.themoviedb.org/3/search/${Type}?api_key=${apiKey}&language=pt-BR&query=${search}&page=${page}&include_adult=false`)
        let response = (await request).json()
        let Data = (await response)
        setPage(Data)
    }

    async function PaginationForSeries(page) {
        let search = (await GetingQuerryFromSeries)
        let request = fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=pt-BR&page=${page}&query=${search}&include_adult=false`)
        let response = (await request).json()
        let Data = (await response)
        setSeries(Data)
    }

    return (
        <>
            <CreatList />
            <Router>
                <Header onSubmit={FromHeader} />
                <Switch>
                    <Route exact path="/">
                        <Main movie={GetMovieId} video={GetVideosForDetail} />
                    </Route>

                    <Route path="/detail">
                        <Detail movie={movieDetail} video={VideosForDetail} />
                    </Route>

                    <Route path="/pessoa">
                        <PersonPage pessoa={PersonData} />
                    </Route>

                    <Route path="/pesquisar">
                        <Pesquisar data={data} movie={GetMovieId} pessoa={GetPerson} TotalPage={Totalpages} page={PaginationForSearch} />
                    </Route>

                    <Route path="/series">
                        <PageNationControls TotalPage={Totalpages} page={PaginationForSeries} />
                        <SeriesChooseGenders QuerySeries={getSeries} />
                        <Series series={series} serieId={getSeriesForDetail} />
                    </Route>

                    <Route path="/serie/detail">
                        <SeriesChooseGenders QuerySeries={getSeries} />
                        <DetailSeries seriado={seriesDetail} />
                    </Route>

                    <Route path="/favoritos">
                        <Favorito movie={GetMovieId} video={GetVideosForDetail} />
                    </Route>

                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Rotas