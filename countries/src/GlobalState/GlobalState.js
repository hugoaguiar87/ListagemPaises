import axios from "axios";
import { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [countries, setCountries] = useState({
        data: [],
        isLoading: false,
        error: ''
    })

    useEffect (() => {
        setCountries ({...countries, isLoading: true})
        
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((res) => {
                setCountries({...countries, isLoading: false, data: res.data})
            })
            .catch((err) => {
                setCountries({...countries, isLoading: false, error: err})
            })
    }, [])

    return (
        <GlobalStateContext.Provider value= {{countries}}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState