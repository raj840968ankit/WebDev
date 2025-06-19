export const getMoviesData = async () => {
    try {
        const res = await fetch(
            `http://www.omdbapi.com/?s=marvel&apikey=${import.meta.env.VITE_API_KEY}&type=movie`
        )
        const data = await res.json()
        return data;

    } catch (error) {
        console.error(error);
    }
}