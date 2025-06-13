import styles from './netflix.module.css'
import styled from 'styled-components'

export const SeriesCard = (props) => {
    const {img_url, name, rating, description, genre, watch_url, cast} = props.currentData
    //!using inline css style
    // const btn_style = {
    //     backgroundColor : "blue",
    //     color : "white",
    //     padding : "10px 15px",
    //     fontSize : "1.6rem",
    //     border : "none",
    //     borderRadius : '10px',
    //     marginTop: "auto"
    // }

    //!using styled-component here
    // const NewButton = styled.button({
    //     backgroundColor : "blue",
    //     color : "white",
    //     padding : "10px 15px",
    //     fontSize : "1.6rem",
    //     border : "none",
    //     borderRadius : '10px',
    //     marginTop: "auto"
    // })
    //same above thing can also be written using template literal(most preferred) because we can use props here
    const NewButton = styled.button`
        background-color : ${(data) => data.rating > 8.5 ? "green" : "yellow"};
        color : black;
        padding : 10px 15px;
        font-size : 1.6rem;
        font-weight : 700;
        border : none;
        border-radius : 10px;
        margin-top: auto;
    `

    const ratingColor = rating > 8.5 ? styles['super-hit'] : styles.average
    return (
        <li className={styles.card}>
            <div>
                <div className={styles.image}>
                    <img src={img_url} alt="qot.jpg" width="40%" height="40%" />
                </div>
                <div className={styles['card-content']}>
                    <h2>Name: {name}</h2>
                    <h3>Rating:  
                        <span className={`${styles.rating} ${ratingColor}`}>
                            {rating}
                        </span>
                    </h3>
                    <p>Summary: {description}</p>
                    <p>Genre: {genre.join(', ')} </p>
                    <p>Cast: {cast.join(', ')}</p>
                    <a className={styles["watch-button"]} href={watch_url} target="_blank">
                        {/* <button style={btn_style}> Button </button> */}
                        <NewButton rating={rating}>Watch Now</NewButton>
                    </a>
                </div>
            </div>
        </li>
    );
}