export const getMoviesDetails = async ({params}) => {
    const id = params.movieID;

    try {
        const res = await fetch(
            `http://www.omdbapi.com/?&apikey=${import.meta.env.VITE_API_KEY}&i=${id}`
        )
        const data = await res.json()
        return data;

    } catch (error) {
        console.error(error);
    }
}