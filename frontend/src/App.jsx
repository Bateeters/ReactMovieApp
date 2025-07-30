import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? ( // If movieNumber equals 1
        <MovieCard movie={{title: "Brian's Favorite", release_date: "2020"}} />
       ) : ( // else
        <MovieCard movie={{title: "Kyleigh's Favorite", release_date: "2001"}} />
       )}
    </>
  )
}

export default App
