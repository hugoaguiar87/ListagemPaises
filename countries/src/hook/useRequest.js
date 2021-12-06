import axios from "axios"
import { useEffect, useState } from "react"

const useRequest = (url) => {
    const [countries, setCountries] = useState({
        data: [],
        isLoading: false,
        error: []
    })

    useEffect (() => {
        setCountries ({...countries, isLoading: true})
        
        axios
            .get(url)
            .then((res) => {
                setCountries({...countries, isLoading: false, data: res.data})
            })
            .catch((err) => {
                setCountries({...countries, isLoading: false, error: err})
            })
    }, [url])

    return countries
}

export default useRequest