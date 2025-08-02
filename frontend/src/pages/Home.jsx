import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home() {
    // creating a state for search bar
    const [searchQuery, setSearchQuery] = useState(""); // setup is [variableName, setVariableName] = useState("defaultValue");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])
    // the way useEffect get's set up:
    // write it as a function, and put a function inside that you want to call: () => {}
    // the inside function is called when there are changes to the dependency array: []

    const handleSearch = (e) => {
        e.preventDefault() // does not refresh the page, keeping search bar text
        alert(searchQuery) // alert now pops up with what was typed into search bar
        setSearchQuery("RESET SEARCH!") // changes the search bar state to "Reset Search" on alert clear
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Search for movies..." 
                  className="search-input"
                  value={searchQuery} // set the value of the created state
                  onChange={(e) => setSearchQuery(e.target.value)} // get the current value, e, and using .target.value, it updates every keystroke
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => // using .map() to iterate through every movie in movies array
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie={movie} key={movie.id}/> // for each movie, return the MovieCard component
                    )
                )}
            </div>
        </div>
    )
}

export default Home