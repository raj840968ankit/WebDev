import { useEffect, useState } from 'react';
import './index.css'
import { PokemonCards } from './PokemonCards';

export const Pokemon = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

    const fetchPokemon = async () => {       //?handling promises with async-await
        try {
            //!fetching data of all pokemon(here we will not get detailed data).....
            const res = await fetch(API);
            const data = await res.json();

            //!fetching data of individual pokemon API url (detailed data)......
            const detailedPokemonData = data.results.map(async (curData) => {
                const res = await fetch(curData.url)
                const data = await res.json()
                
                return data;
            })

            // console.log(detailedPokemonData); //here we get promise object of each pokemon in an array

            const resolvedData = await Promise.all(detailedPokemonData)  //!very important to resolve promises of array

            setPokemons(resolvedData)
            setLoading(false)
        } catch (error) {
            console.error(error);
            setError(error)
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    if(loading){
        return <h1>Loading....</h1>
    }

    if(error){
        return <h1>{error.message}</h1>
    }

    if(!loading){
        console.log(pokemons);
        
    }

    //!search value is empty then searchData will includes all pokemons(!important note)
    const searchData = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="container">
            <header>
                <h1>Let's catch Pokemon</h1>
            </header>

            {/* ..........now we are going to implement search functionality............ */}

            <div className="pokemon-search">
                <input 
                    type="text" 
                    placeholder='search pokemon'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div>
                <ul className='cards'>
                    {/* {pokemons.map((pokemon) => { */}
                    {searchData.map((pokemon) => {
                        return (
                            <PokemonCards key={pokemon.id} pokemonData={pokemon}/>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}