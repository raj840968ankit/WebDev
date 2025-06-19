import { useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { useState } from "react"
import { deleteData, getData } from "../services/GetServices"

export const Movie = () => {
    const [data, setData] = useState([])


    //! for fetching api data
    const getApiData = async () => {
        try {
            //! Normal axios get method
            // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

            //! created a dedicated GetServices.jsx in services folder
            const res = await getData()
            // console.log(res);
            setData(res.data)
        } catch (error) {
            console.error("Error Message : ",error.message);
            console.error("Error Status : ",error.response.message);
            console.error("Error Data : ",error.response.data);
        }
    }
    useEffect(() => {
        getApiData()
    }, [])

    //!for deleting api data
    const deleteApiData = async () => {
        try {
            const res = await deleteData(4)
            console.log(res);
            setData(data)
        } catch (error) {
            console.error("Error Message : ",error.message);
        }
    }
    useEffect(() => {
        deleteApiData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return <h1>Hello Axios</h1>
}