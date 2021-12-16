import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import GlobalStateContext from "../../GlobalState/GlobalStateContext"

import logo  from '../../img/logo.svg'
import Vector from '../../img/Vector.svg'
import { Header, InfoCountry, Main } from './style'



const DetailsPage = () => {
    const { nameCountry } = useParams()
    const navigate = useNavigate()
    const {countries} = useContext(GlobalStateContext)
    const [ countryDetails, setCountryDetails ] = useState({
        data: [],
        isLoading: false,
        error: ''
    })
    const [ bordersCountries, setBordersCountries ] = useState()

    console.log('PaisDeatils',countryDetails)
    console.log('Global', countries)
    console.log('borde', bordersCountries)

    useEffect (() => {
        setCountryDetails({...countryDetails, isLoading: true})

        axios.get(`https://restcountries.com/v2/name/${nameCountry}`)
        .then((res) => {
            setCountryDetails ({...countryDetails, data: res.data, isLoading:false, error: ''})
            setBordersCountries (res.data[0].borders)
        })
        .catch((err) => {
            setCountryDetails ({...countryDetails, data: [], isLoading:false, error: err})
            
        })
    }, [nameCountry])


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

    const bordersCountryRender = bordersCountries && countryDetails.data && countries.data && countries.data.filter((iten) => {
        
        for(let country of bordersCountries) {
            if(country === iten.cca3) {
                return true
            }  
            
        }
    })
    .map((iten, index) => {
        return (
            <img
                key={index} 
                src= {iten.flags.png} 
                alt='Country Flag'
                onClick={() => onClickCountry(iten.name.common)}
            />
    )})

    const onClickCountry = (nameCountry) => {
        navigate (`/details/${nameCountry}`)
    }


    return(
        <>
            <Header>
                <img src={logo} alt= 'Logo'/>
                <button onClick={() => navigate('/')}>
                    <img src={Vector} alt= 'vetor'/>
                    <p>Return</p>
                </button>
            </Header>

            <Main>
                {infoCountry}
                <div className="neighboring">
                    <p>Neighboring Countries</p>
                    {countryDetails.isLoading && <p>Loading...</p>}
                    {!countryDetails.isLoading && !bordersCountries && <p>This country does not border any country.</p>}
                    {!countryDetails.isLoading && bordersCountries && bordersCountryRender}
                </div>
                
            </Main>
        </>
    )
}

export default DetailsPage