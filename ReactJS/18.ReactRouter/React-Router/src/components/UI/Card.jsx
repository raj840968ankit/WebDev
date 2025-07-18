import { NavLink } from 'react-router-dom'
import './Card.css'

export const Card = ({movie}) => {
    const {Poster, imdbID} = movie
    return (
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} alt={imdbID} className="poster"/>
                </div>
                <div className="ticket-container">
                    <div className="ticket_content">
                            <button className="ticket_buy-btn">
                                <NavLink to={`/movie/${imdbID}` }>Watch Now</NavLink>
                            </button>
                    </div>
                </div>
            </div>
        </li>
    )
}