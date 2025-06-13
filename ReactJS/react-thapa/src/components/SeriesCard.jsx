import styles from './netflix.module.css'

export const SeriesCard = (props) => {
    const {img_url, name, rating, description, genre, watch_url, cast} = props.currentData
    const btn_style = {
        backgroundColor : "blue",
        color : "white",
        padding : "10px 15px",
        fontSize : "1.6rem",
        border : "none",
        borderRadius : '10px',
        marginTop: "auto"
    }

    const ratingColor = rating > 8.5 ? 'super-hit' : 'average'
    return (
        <li className={styles.card}>
            <div>
                <div className={styles.image}>
                    <img src={img_url} alt="qot.jpg" width="40%" height="40%" />
                </div>
                <div className={styles['card-content']}>
                    <h2>Name: {name}</h2>
                    <h3>Rating:  
                        <span className={`rating ${ratingColor}`}>
                            {rating}
                        </span>
                    </h3>
                    <p>Summary: {description}</p>
                    <p>Genre: {genre.join(', ')} </p>
                    <p>Cast: {cast.join(', ')}</p>
                    <a className='watch-button' href={watch_url} target="_blank">
                        <button style={btn_style}> Button </button>
                    </a>
                </div>
            </div>
        </li>
    );
}