export const apiKey = "54ec0fb23647e5d3bd0095fcade09c88";

const servicesApi = {

    async GetingGendersSeries() {
        let request = fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
        let response = (await request).json()
        let data = (await response)
        return data
    },

    async GetingDataForMain() {
        let request = fetch(`https://api.themoviedb.org/3/list/3?page=1&api_key=${apiKey}&language=pt-BR`);
        let response = (await request).json();
        let data = await response;
        return data
    },

    async getingMoviesCredit(id) {
        let request = fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=pt-br`)
        let response = (await request).json()
        let Data = await response
        console.log("conso", Data.cast.slice(0, 10))
        return Data
    },

    async getingSimilarMovies(id) {
        console.log(id)
        let request = fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=pt-BR&page=1`)
        let response = (await request).json()
        let Data = await response
        return Data
    },

    async GetingPersonMovies(id) {
        console.log(id)
        let request = fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=pt-BR`)
        let response = (await request).json()
        let Data = await response
        return Data
    },

    async onSearchSubmit(search) {
        let request = fetch(`https://api.themoviedb.org/3/search/${search.type}?api_key=${apiKey}&language=pt-BR&query=${search.search}&page=${"1"}&include_adult=false`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    },

    async movieId(Id) {
        let request = fetch(`https://api.themoviedb.org/3/movie/${Id}/external_ids?api_key=${apiKey}`)
        let response = (await request).json()
        let Data = (await response)
        let IdImdb = (await Data.imdb_id)
        let requestImdb = fetch(`https://api.themoviedb.org/3/find/${IdImdb}?api_key=${apiKey}&language=pt-BR&external_source=imdb_id`)
        let responseImdb = (await requestImdb).json()
        let data = (await responseImdb)
        return data
    },
    async getVideosForDetail(id) {
        let request = fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=pt-BR`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    },
    async getSeries(query) {
        let request = fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=pt-BR&page=1&query=${query}&include_adult=false`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    },
    async getSeriesForDetail(id) {
        let request = fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    },
    async person(id) {
        let request = fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=pt-BR`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    },

    async GetingColectionImages(id) {
        let request = fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}&language=pt-BR&include_image_language=pt,null`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    }


}

export default servicesApi