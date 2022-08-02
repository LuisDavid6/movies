import { GET_MOVIES, GET_MOVIE_DETAILS, ADD_MOVIE_TO_FAVORITES,
         DELETE_FAVORITE_MOVIE, SAVE_SEARCH} from "./actionsType";

const apikey = process.env.REACT_APP_API_KEY

export function getMovies(title){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_MOVIES, payload: json });
        });
    };
}

export function getMovieDetail(id){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_MOVIE_DETAILS, payload: json });
        });
    };
}

export function addMovieToFavorites(movie){
    return{
        type: ADD_MOVIE_TO_FAVORITES,
        payload: movie
    }
}

export function deleteFavoriteMovie(id){
    return{
        type: DELETE_FAVORITE_MOVIE,
        payload: id
    }
}

export function saveSearch(value){
    return{
        type: SAVE_SEARCH,
        payload: value
    }
}