export const PokemonCards = ({ pokemonData: pokemon }) => {
    return (
        <li className="pokemon-card">
            <figure>
                <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                    className="pokemon-image"
                />
            </figure>
            <h1 className="pokemon-name">{pokemon.name}</h1>
            <div className="pokemon-info pokemon-highlight">
                <p>
                    {pokemon.types.map((curType) => curType.type.name).join(", ")}
                </p>
            </div>
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
            <div className="grid-three-cols">
                <div className="pokemon-info">
                    <span>Experience</span>
                    <p>{pokemon.base_experience}</p>
                </div>
                <div className="pokemon-info">
                    <span>Attack</span>
                    <p>{pokemon.stats[1].base_stat}</p>
                </div>
                <div className="pokemon-info">
                    <span>Abilities</span>
                    <p>
                        {pokemon.abilities
                            .map((abilityInfo) => abilityInfo.ability.name)
                            .slice(0, 1)
                            .join(", ")
                        }
                    </p>
                </div>
            </div>
        </li>
    )
}