import { MovieCard } from "./MovieCard";

interface MovieProps {
  movies: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{ // "Ratings" é um Array de objeto
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
  title: string; 
}


export function Content({movies, title}: MovieProps) {
  return (
    <>
      <header>
        <span className="category">Categoria:<span> {title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </>
  )
  // Complete aqui
}