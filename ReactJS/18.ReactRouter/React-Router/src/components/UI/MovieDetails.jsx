import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
    //const params = useParams()

    const movieDetails = useLoaderData();
    console.log(movieDetails);

    const { Poster, imdbID, Language, Title, imdbRating } = movieDetails;

    return (
        <ul className="movie-list-flex">
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} alt={imdbID} className="poster" />
                    </div>
                    <div className="movie-description">
                        <p>Movie Name : {Title}</p>
                        <p>Language : {Language}</p>
                        <p>Imdb Rating : {imdbRating}</p>
                    </div>
                    <div className="ticket-container">   
                        <div className="ticket_content">
                            <button className="ticket_buy-btn">Watch Now</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
};
