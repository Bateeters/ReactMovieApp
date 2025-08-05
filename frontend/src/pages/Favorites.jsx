import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => // using .map() to iterate through every movie in movies array
                        <MovieCard movie={movie} key={movie.id}/> // for each movie, return the MovieCard component
                    )}
                </div>
            </div>
        )}

    return(
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Your favorites will appear here</p>
        </div>
    )
}

export default Favorites