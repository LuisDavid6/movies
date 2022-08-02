import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import {getMovieDetail} from "../../redux/actions.js"
import style from "./Movie.module.css"


export function Movie (props){
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        props.getMovieDetail(params.id)
    },[])



    return(
        <div>
            <div className={style.main}>
                <div className={style.back}>
                    <button onClick={()=>navigate(-1)}>Volver</button>

                </div>
                <div className={style.left}>
                    <img src={props.details.Poster} alt={props.details.Title}/>
                </div>
                <div className={style.right}>
                    <h2 className={style.title}>{props.details.Title}</h2>
                    <div className={style.details}>
                        <span className={style.name}>Genero:</span>
                        <span className={style.genr}>{props.details.Genre}</span>
                    </div>
                    <div className={style.details}>
                        <span className={style.name}>Sinopsis:</span>
                        <span>{props.details.Plot}</span>
                    </div>
                    <div className={style.details}>
                        <span className={style.name}>Reparto:</span>
                        <span>{props.details.Actors}</span>
                    </div>
                    <div className={style.details}>
                        <span className={style.name}>Año:</span>
                        <span>{props.details.Year}</span>
                    </div>
                    <div className={style.details}>
                        <span className={style.name}>Duración:</span>
                        <span>{props.details.Runtime}</span>
                    </div>
                    <div className={style.details}>
                        <span className={style.name}>Calificación:</span>
                        <span>{props.details.imdbRating+"⭐"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        details: state.movieDetails
    }
}


export default connect(mapStateToProps, {getMovieDetail}) (Movie)