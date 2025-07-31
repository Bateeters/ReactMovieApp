import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    // creating a state for search bar
    const [searchQuery, setSearchQuery] = useState(""); // setup is [variableName, setVariableName] = useState("defaultValue");

    const movies =[
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Peter Pan", release_date: "1970"},
        {id: 3, title: "Indiana Jones: Raiders of the Lost Ark", release_date: "1994"},
    ]

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