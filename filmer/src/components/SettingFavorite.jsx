function SettingFavorite() {

    function GetingMoviesSave(key) {
        const FavMovie = localStorage.getItem(key)
        let HasFavo = JSON.parse(FavMovie) || [];
        return HasFavo;

    }

    function saveMovie(key, movie) {
        const MovieStorage = GetingMoviesSave(key)

        const MovieAllreadySaved = MovieStorage.some(filme => filme.id === movie.id)

        if (MovieAllreadySaved) {
            alert("filme ja salvo")
            return;
        }


        MovieStorage.push(movie);
        localStorage.setItem(key, JSON.stringify(MovieStorage));

    }

    function Deletar(key, movie) {
        const MovieStorage = GetingMoviesSave(key)
        const filtrado = MovieStorage.filter(e => e.id !== movie.id)
        localStorage.setItem(key, JSON.stringify(filtrado))

    }
    return { GetingMoviesSave, saveMovie, Deletar }
}

export default SettingFavorite
