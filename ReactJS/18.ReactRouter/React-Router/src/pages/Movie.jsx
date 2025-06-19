import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const moviesData = useLoaderData()
    console.log(moviesData);
    
    return (
        <>
            <ul className="movie-list-grid">
                {moviesData.Search.map((curMovie) => {
                    return <Card key={curMovie.imdbID} movie={curMovie}/>
                })}
            </ul>
        </>
    )
}
