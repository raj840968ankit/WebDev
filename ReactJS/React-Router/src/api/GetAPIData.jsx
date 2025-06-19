export const getMoviesData = async () => {
    try {
        const res = await fetch('http://www.omdbapi.com/?s=marvel&apikey=1adba144&type=movie')
        const data = await res.json()
        return data;

    } catch (error) {
        console.error(error);
    }
}