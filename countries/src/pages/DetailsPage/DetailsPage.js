import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import logo  from '../../img/logo.svg'
import Vector from '../../img/Vector.svg'
import { Header, InfoCountry, Main } from './style'



const DetailsPage = () => {
    const { nameCountry } = useParams()
    const navigate = useNavigate()
    const [ countryDetails, setCountryDetails ] = useState({
        data: [],
        isLoading: false,
        error: ''
    })
    const [ bordersCountries, setBordersCountries ] = useState([])

    console.log(countryDetails)


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


    useEffect (() => {
        
    }, [])


    const infoCountry = countryDetails.data && countryDetails.data.map((info, index) => {
        return (
            <InfoCountry key={index}>
                <img src= {info.flags.png} alt="Country flag" />
                <div>
                    <p> Name: {info.name}</p>
                    <p> Capital: {info.capital}</p>
                    <p> Region: {info.region}</p>
                    <p> Subregion: {info.subregion}</p>
                    <p> Population: {info.population}</p>
                    <p> Languages: {info.languages.map(lang => <span>{lang.name}</span>)}</p>
                </div>
            </InfoCountry>
        )
    })


    return(
        <>
            <Header>
                <img src={logo} alt= 'Logo'/>
                <button onClick={() => navigate(-1)}>
                    <img src={Vector} alt= 'vetor'/>
                    <p>Voltar</p>
                </button>
            </Header>

            <Main>
                {infoCountry}
            </Main>
        </>
    )
}

export default DetailsPage