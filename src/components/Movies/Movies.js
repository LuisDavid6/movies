import React, { useEffect} from "react"
import { connect } from "react-redux"
import { Link, useParams } from "react-router-dom"
import {getMovies, addMovieToFavorites, saveSearch} from "../../redux/actions"
import style from "./Movies.module.css"

export function Movies(props){
    
    const params = useParams()

    useEffect(() => {
        params && props.saveSearch(params.title)
        props.getMovies(params.title || props.search )
    },[params])

    const addFavorite = (e) =>{
        let flag = true
        props.favorites && props.favorites.map(movie =>{ 
            if(movie.imdbID === e.imdbID) flag = false
        })
        
        if(flag){
            e.Type = "fav";
            props.addMovieToFavorites(e)
        }   
    }   

    return(
        <div>
            <div className={style.list}>
                {console.log(props.search)}
                {   props.movies && props.movies.map(e=>{
                        props.favorites && props.favorites.map(f=>{
                            if(f.imdbID === e.imdbID){
                                e.Type = "fav"
                            }
                        })
                    })
                }
                {props.movies && props.movies.map(e =>{
                    return(
                        <div key={e.imdbID}>
                            <div className={style.container}> 
                                <div className={style.title}> 
                                <Link to={`/movie/${e.imdbID}`} className={style.link}>
                                        <p className={style.title}>{e.Title}</p>
                                </Link>
                                        <button  className={style.fav} onClick={()=> addFavorite(e)}>{e.Type === "fav" ? "❤️" : "🤍"}</button>
                                </div>
                                <Link to={`/movie/${e.imdbID}`} className={style.link}>
                                    <div className={style.image}>
                                        <img src={e.Poster} className={style.img} title={e.Title} alt={e.Title}></img>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    
}

const mapStateToProps = (state) =>{
    return{
        movies: state.movies,
        favorites: state.favorites,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getMovies: (e) => dispatch(getMovies(e)),
        saveSearch: (e) => dispatch(saveSearch(e)),
        addMovieToFavorites: (e) => dispatch(addMovieToFavorites(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Movies)