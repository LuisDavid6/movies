import { GET_MOVIES, GET_MOVIE_DETAILS, ADD_MOVIE_TO_FAVORITES,
         DELETE_FAVORITE_MOVIE, SAVE_SEARCH} from "./actionsType";

// export function getMovies(title){
//     let num = 1;
//     return function(dispatch) {
//         //20dac387&s  6d022ee2   e9e9cdf9  93691e22
//         let jason ={}
//         while(num<=3){
//             return fetch("http://www.omdbapi.com/?apikey=6d022ee2&s=" + title+"&page="+num)
//             .then(response => response.json())
//             .then(json => {
//                 jason+=json
//                 num++
//             })
//         }
//             dispatch({ type: GET_MOVIES, payload: jason });
//     };
// }
export function getMovies(title){
    console.log(title)
    return function(dispatch) {
        //20dac387&s  6d022ee2   e9e9cdf9  93691e22
        return fetch("http://www.omdbapi.com/?apikey=6d022ee2&s=" + title)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_MOVIES, payload: json });
        });
    };
}

export function getMovieDetail(id){
    return function(dispatch) {
        //20dac387&s  6d022ee2   e9e9cdf9  93691e22
        return fetch("http://www.omdbapi.com/?apikey=6d022ee2&i="+id)
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