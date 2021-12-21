import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import logo  from '../../img/logo.svg'
import Vector from '../../img/Vector.svg'
import { Header, Filter, Input, Select, Country, Main } from './style'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'

import {Paginate} from '../../Paginate/Paginate.js'

const HomePage = () => {
    const {countries} = useContext(GlobalStateContext)
    const [inputFilter, setInputFilter] = useState()
    const [typeFilter, setTypeFilter] = useState()
    const [countriesFilter, setCountriesFilter] = useState({
        data: [],
        isLoading: false,
        error: ''
    })
    const [filterState, setFilterState] = useState(false)
    const navigate = useNavigate()

    const [current, setCurrent] = useState(1)


    const allCountries = countries && countries.data.map((iten, index) => {
        return (
            <Country 
                key={index} 
                src= {iten.flags.png} 
                alt='Country Flag'
                onClick={() => onClickCountry(iten.name.common)}
            />
        )
    })

    const searchedCountries = countriesFilter && countriesFilter.data.map((iten, index) => {
        return (
            <Country 
                key={index} 
                src= {iten.flags.png} 
                alt='Country Flag'
                onClick={() => onClickCountry(iten.name.common)}
            />
        )
    }) 

    const filter = () => {
        switch (inputFilter) {
            case 'region':
                return(
                    <>
                        <p>Region</p>
                        <Select required value= {typeFilter} onChange= {(e) => setTypeFilter(e.target.value)}>
                            <option disabled selected>Choose a region...</option>
                            <option value='africa'>Africa</option>
                            <option value='america'>Americas</option>
                            <option value='asia'>Asia</option>
                            <option value='europe'>Europe</option>
                            <option value='oceania'>Oceania</option>
                        </Select>
                    </>
                )
            case 'capital':
                return(
                    <>
                        <p>Capital</p>
                        <Input 
                            placeholder= 'Enter the name of the capital...' 
                            required
                            value={typeFilter} 
                            onChange={(e) => setTypeFilter(e.target.value)}
                        />
                    </>
                    
                )
            case 'lang':
                return(
                    <>
                        <p>Language</p>
                        <Input 
                            placeholder= 'Enter language in ISO 639-2 standard...'
                            type='text'
                            minLength= '3'
                            maxLength= '3'
                            required
                            value={typeFilter} 
                            onChange={(e) => setTypeFilter(e.target.value)}
                        />
                    </>
                    
                )
            case 'country':
                return(
                    <>
                        <p>Country</p>
                        <Input
                            placeholder= 'Enter the name of the country...'  
                            required
                            value={typeFilter} 
                            onChange={(e) => setTypeFilter(e.target.value)}
                        />
                    </>
                    
                )
            default:
                return (<div></div>)
        }
    }

    const onClickCountry = (nameCountry) => {
        navigate (`/details/${nameCountry}`)
    }

    const onClickSearchFilter = () => {
        setCountriesFilter ({...countriesFilter, isLoading: true, error: '', data: []})
        setFilterState(true)
        switch (inputFilter) {
            case 'region':
                axios
                    .get(`https://restcountries.com/v3.1/region/${typeFilter}`)
                    .then((res) => {
                        setCountriesFilter({...countriesFilter, isLoading: false, data: res.data, error: ''})
                    })
                    .catch((err) => {
                        setCountriesFilter({...countriesFilter, isLoading: false, error: err.response.data, data: []})
                    })
                break;
            case 'capital':
                axios
                    .get(`https://restcountries.com/v3.1/capital/${typeFilter}`)
                    .then((res) => {
                        setCountriesFilter({...countriesFilter, isLoading: false, data: res.data, error: ''})
                    })
                    .catch((err) => {
                        setCountriesFilter({...countriesFilter, isLoading: false, error: err.response.data, data: []})
                    })
                break;
            case 'lang':
                axios
                    .get(`https://restcountries.com/v3.1/translation/${typeFilter}`)
                    .then((res) => {
                        setCountriesFilter({...countriesFilter, isLoading: false, data: res.data, error: ''})
                    })
                    .catch((err) => {
                        setCountriesFilter({...countriesFilter, isLoading: false, error: err.response.data, data: []})
                    })
                break;
            case 'country':
                axios
                    .get(`https://restcountries.com/v3.1/name/${typeFilter}`)
                    .then((res) => {
                        setCountriesFilter({...countriesFilter, isLoading: false, data: res.data, error: ''})
                    })
                    .catch((err) => {
                        setCountriesFilter({...countriesFilter, isLoading: false, error: err.response.data, data: []})
                    })
                break;
            default:
                break
        }
    }

    const countriesRender = () => {
        switch (filterState){
            case true:
                return(
                    <div>
                        {countriesFilter.isLoading && <p>Loading...</p>}
                        {!countriesFilter.isLoading && countriesFilter.error && <p>Country not found! Try again.</p>}
                        {!countriesFilter.isLoading && searchedCountries}
                    </div>
                )
            default:
                return(
                    <div>
                        {countries.isLoading && <p>Loading...</p>}
                        {!countries.isLoading && countries.error && <p>Country not found! Try again.</p>}
                        {!countries.isLoading && allCountries}
                    </div>
                )
        }
    }
    
    console.log(countries)
    console.log('page', current)

    return (
        <>
            <Header>
                <img src={logo} alt= 'Logo'/>
                <button onClick={() => navigate(-1)}>
                    <img src={Vector} alt= 'vector'/>
                    <p>Return</p>
                </button>
            </Header>

            <Main>
                <Filter>
                    <div className='typeFilter'>
                        <p>Filter by</p>
                        <select value= {inputFilter} onChange={(e) => setInputFilter(e.target.value)}>
                            <option value="" disabled selected>Choose an option</option>
                            <option value='region'>Region</option>
                            <option value='capital'>Capital</option>
                            <option value='lang'>Language</option>
                            <option value='country'>Country</option>
                        </select>
                    </div>
                    <div className='typeFilter'>
                        {filter()}
                    </div>
                    
                    <button onClick={onClickSearchFilter}>Search</button>
                </Filter>
                <div className='country'>
                    {countriesRender()}
                </div>

                <Paginate 
                    records= {countries.data.length}
                    limit= {15}
                    current= {current}
                    onChange= {setCurrent}
                    delta= {1}
                    fixed= {1}
                />
            </Main>
        </>
    )
}

export default HomePage