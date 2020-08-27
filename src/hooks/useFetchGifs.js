import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        getGifs(category)
            .then(setData)
        setloading(false)
        console.log(loading);
    }, [category])//si la categoria cambia que vuelva a ejecuatar
    return {loading,data};
}
