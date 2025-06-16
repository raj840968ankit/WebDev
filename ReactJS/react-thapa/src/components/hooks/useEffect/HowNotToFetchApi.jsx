import './pokemon.css'

export const HowNotToFetchApi = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = res.json()
    console.log(data);
    
    return (
        <div className="container effect-conta">
            <ul>data : </ul>
        </div>
    )
}