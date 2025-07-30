import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <MovieCard movie={{title: "Brian's Favorite", release_date: "2020"}} />
      <MovieCard movie={{title: "Kyleigh's Favorite", release_date: "2001"}} />
    </>
  )
}

export default App
