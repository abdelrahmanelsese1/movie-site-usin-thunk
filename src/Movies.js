import { useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import {BsFillStarFill} from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./action";
import Getmovies from "./Getdataaction";
import { langContext } from "./Contextlang";


const Movies = () => {
    const movies = useSelector((state) =>state.moviesdata)
    console.log(movies)
    const dispatch = useDispatch();
    const { contextLang } = useContext(langContext)


    useEffect( () => {

    dispatch(Getmovies());

    })

    const addfav=(movieId)=>{
        dispatch(addMovie(movieId))
        }
    return(
        <>
        
        <div className="container" >
            <div className="row">
            <h1 className='text-warning'>{contextLang === "en" ? "Movies" : "الأفلام"}</h1>

        
            {movies.map((movie) => {
                return (
                    
                        <div className="col-lg-4 col-md-6 col-sm-12" key={movie.id}>
                                <div className="card " style={{margin:"15px",backgroundColor:"#000",color:"#0d67ea"}}>
                                    <span className="badge btn card-img-overlay text-end" style={{paddingTop:"30px",color:"gold" ,fontSize:"30px",maxWidth:"50px" , maxHeight:"70px"}} onClick={()=>{addfav(movie)}} > <BsFillStarFill/> </span>
                                    <div className="services-img text-center py-4">
                                        <Link to={`/movie/${movie.id}`}>
                                            <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="card-title ">{movie.original_title}</h5>
                                    </div>
                                </div>
                        </div>
                        )
            })}
            </div>
        </div>
            
        
        </>
    )
}
export default Movies