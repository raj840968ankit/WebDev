import { useEffect, useState } from "react";
import "./pokemon.css";

export const HowNotToFetchApi = () => {
    // const [apiData, setApiData] = useState([])

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true); //?handling loading via fetching api
    const [error, setError] = useState(null)

    //! this way we cannot fetch API
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => res.json())
    //     .then((data) => setApiData(data))
    //     .catch((error) => console.error(error))

    //!this is the right way to fetch API
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((data) => setApiData(data))
    //         .catch((error) => console.error(error))
    // }, [])

    const API = "https://pokeapi.co/api/v2/pokemon/squirtle";

    // const pokemonAPI = () => {        //?handling promises with then-catch
    //     fetch(API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setPokemon(data);
    //             setLoading(() => false);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             setLoading(() => false);
    //         });
    // };

    const fetchPokemon = async () => {       //?handling promises with async-await
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        // pokemonAPI();
        fetchPokemon();
    }, []);

    //!fetching api takes time so initial value will be null itself
    //?return data only if api is fetched
    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if(error){
        return (
            <div>
                <h1>Error : {error.message}</h1>
            </div>
        );
    }

    return (
        <section className="container">
            <header>
                <h1>Let's Catch Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt="nn"
                            className="pokemon-image"
                        />
                    </figure>
                    <h1>{pokemon.name}</h1>
                    <div className="grid-three-cols">
                        <p className="pokemon-info">
                            Height : <span>{pokemon.height}</span>
                        </p>
                        <p className="pokemon-info">
                            Weight : <span>{pokemon.weight}</span>
                        </p>

                        <p className="pokemon-info">
                            Speed : <span>{pokemon.stats[5].base_stat}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
};
