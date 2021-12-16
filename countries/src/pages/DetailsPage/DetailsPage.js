import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import logo  from '../../img/logo.svg'
import Vector from '../../img/Vector.svg'
import { Header } from './style'



const DetailsPage = () => {
    const { nameCountry } = useParams()
    const navigate = useNavigate()
    const [ countryDetails, setCountryDetails ] = useState({
        data: [],
        isLoading: false,
        error: ''
    })

    console.log('pais', nameCountry)

    useEffect (() => {
        setCountryDetails({...countryDetails, isLoading: true})

        axios.get(`https://restcountries.com/v2/name/${nameCountry}`)
        .then((res) => {
            setCountryDetails ({...countryDetails, data: res.data, isLoading:false, error: ''})
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(countryDetails)
    
    return(
        <>
            <Header>
                <img src={logo} alt= 'Logo'/>
                <button onClick={() => navigate(-1)}>
                    <img src={Vector} alt= 'vetor'/>
                    <p>Voltar</p>
                </button>
            </Header>
        </>
    )
}

export default DetailsPage