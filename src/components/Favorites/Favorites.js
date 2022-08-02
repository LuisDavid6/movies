import { connect } from "react-redux"
import { Link } from "react-router-dom"
import style from "./Favorites.module.css"
import { deleteFavoriteMovie } from "../../redux/actions"

export function Favorites(props){
    return(
        <div>
            <h1>FAVORITES:</h1>
            <div className={style.list}>
                {props.favorites && props.favorites.map(e =>{
                    return(
                        <div key={e.imdbID} className={style.favorites}>
                            <div className={style.title}> 
                            <Link to={`/movie/${e.imdbID}`} className={style.link}>
                                <p className={style.title}>{e.Title}</p>
                            </Link>
                                <button className={style.delete} onClick={() => props.deleteFavoriteMovie(e.imdbID)}>❌</button>
                            </div>
                            <Link to={`/movie/${e.imdbID}`} className={style.link}>
                                <div className={style.image}>
                                    <img src={e.Poster} className={style.img} title={e.Title} alt={e.Title}></img>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, {deleteFavoriteMovie}) (Favorites)