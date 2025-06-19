import axios from 'axios'

const api = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

//!creating a get req function
export const getData = async () => {
    return api.get('/posts')     //! this is route for getting data (go and check in jsonplaceholder api website)
}

//!creating a delete req function
export const deleteData =  async (id) => {
    return api.delete(`/posts/${id}`)
}