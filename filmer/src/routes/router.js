import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import Detail from "../pages/detail";
import { apiKey } from "../services/api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Pesquisar from "../pages/pesquisar";
import SeriesChooseGenders from "../components/seriesChooseGender";
import Series from "../pages/Series";
import DetailSeries from "../pages/seriesDetail";
import PageNationControls from "../components/paginationNumber.jsx";
import PersonPage from "../pages/personDetail";
import Favorito from "../pages/favorito";
import api from "../services/api"
import ContextObjet from "../context/Contexto";
import FormPost from "../post/postForm";
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
    const [cast, setCast] = useState(undefined)
    const [MoreImages, setMoreImages] = useState(undefined)
    const [PersonCredit, setPersonCredit] = useState(undefined)
    const [images, setImages] = useState(undefined)

    useEffect(() => SetData(page), [page])


    const getingSimilarMovies = (id) => {
        api.getingSimilarMovies(id).then(e => {
            setMoreImages(e)
        })
    }

    const GetingMovieCredits = (id) => {
        api.getingMoviesCredit(id).then(e => {
            setCast(e)

        })
    }

    const GetingPersonMovies = (personID) => {
        api.GetingPersonMovies(personID).then(e => {
            setPersonCredit(e)
        })
    }

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
    const GetingImages = (id) => {
        api.GetingColectionImages(id).then(e => {
            setImages(e)
        })
    }

    return (

        <>
            <Router>
                <Header onSubmit={FromHeader} />
                <Switch>
                    <Route path="/Create/List">
                        <FormPost />
                    </Route>
                    <Route exact path="/">
                        <Main movie={GetMovieId} video={GetVideosForDetail} credits={GetingMovieCredits}
                            similar={getingSimilarMovies} MoreImages={GetingImages} />
                    </Route>

                    <Route path="/detail">
                        <Detail movie={movieDetail} video={VideosForDetail} credits={cast} similar={MoreImages}
                            FromInsideMovie={GetMovieId} FromInsidevideo={GetVideosForDetail} FromInsidecredits={GetingMovieCredits}
                            FromIsidesimilar={getingSimilarMovies} pessoa={GetPerson} personCredits={GetingPersonMovies}
                            MoreImages={images} FromMoreImages={GetingImages}
                        />
                    </Route>

                    <Route path="/pessoa">
                        <ContextObjet.Provider value={PersonData}>
                            <PersonPage personCredits={PersonCredit} movie={GetMovieId} video={GetVideosForDetail} credits={GetingMovieCredits} similar={getingSimilarMovies} />
                        </ContextObjet.Provider>
                    </Route>

                    <Route path="/pesquisar">
                        <Pesquisar data={data} movie={GetMovieId} pessoa={GetPerson} serieId={getSeriesForDetail} TotalPage={Totalpages} page={PaginationForSearch}
                            video={GetVideosForDetail} credits={GetingMovieCredits} similar={getingSimilarMovies} personCredits={GetingPersonMovies} MoreImages={GetingImages} />
                    </Route>

                    <Route path="/series">
                        <SeriesChooseGenders QuerySeries={getSeries} />
                        <PageNationControls TotalPage={Totalpages} page={PaginationForSeries} />
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