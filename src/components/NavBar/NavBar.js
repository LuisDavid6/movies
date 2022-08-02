import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import Movies from "../Movies/Movies"

export function NavBar(){

    const [input, setInput] = useState("")

    const handleChange = (e) =>{
        setInput(
            e.target.value
        )
    }

    return(
        <div className={style.main}>
            <div>
                <ul className={style.ul}>
                    <Link to="/" className={style.link}> <li className={style.li}>Home</li> </Link>
                    <Link to="/favorites" className={style.link}><li className={style.li}>Favorites</li> </Link>
                </ul>
            </div>
            <div className={style.form}>
                <form >
                    <input type="text" name="name" placeholder="Buscar..." autoComplete="off" className={style.input} onChange={(e) => {handleChange(e)}}></input>
                    <Link to={`/movies/${input}`}> 
                        <button type="submit" className={style.search}>
                            <img className={style.search} src="https://cdn-icons-png.flaticon.com/512/5122/5122475.png"></img>
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}