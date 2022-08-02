import { GET_MOVIES, GET_MOVIE_DETAILS, ADD_MOVIE_TO_FAVORITES, 
        DELETE_FAVORITE_MOVIE, SAVE_SEARCH} from "./actionsType";

const inicialState ={
    movies: [],
    movieDetails: {},
    favorites: [],
    search:"spider"
}
export default function Reducer (state=inicialState, action){
    switch(action.type){
        case GET_MOVIES:
            return{
                ...state,
                movies: action.payload.Search
            }
        case GET_MOVIE_DETAILS:
            return{
                ...state,
                movieDetails: action.payload
            }
        case ADD_MOVIE_TO_FAVORITES:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DELETE_FAVORITE_MOVIE:
            return{
                ...state,
                favorites: state.favorites.filter(e => e.imdbID !== action.payload)
            }
        case SAVE_SEARCH:
            return{
                ...state,
                search: action.payload ? action.payload : state.search
            }

        default:
            return state
    }
}