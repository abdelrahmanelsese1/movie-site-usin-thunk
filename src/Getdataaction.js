import axios from "axios"

const Getmovies = () => (dispatch) => {
    return  axios.get("https://api.themoviedb.org/3/movie/popular?api_key=62ffb746111b1206c6f9525436be498f")
	.then((res)=> dispatch({
		type: "GET_DATA",
		payload: res.data.results
	})
	)

	.catch((err) => console.log(err))
    
}
export default Getmovies