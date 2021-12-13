import { useState, useEffect } from 'react'
import useRequest from '../../hook/useRequest'
import axios from 'axios'
import logo  from '../../img/logo.svg'
import { Header } from './style'

const HomePage = () => {
    const [inputFilter, setInputFilter] = useState()
    const [typeFilter, setTypeFilter] = useState()
    const [countries, setCountries] = useState({
        data: [],
        isLoading: false,
        error: ''
    })
    const [countriesFilter, setCountriesFilter] = useState({
        data: [],
        isLoading: false,
        error: ''
    })
    const [filterState, setFilterState] = useState(false)

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

    const allCountries = countries && countries.data.map((iten, index) => {
        return (
            <img key={index} src= {iten.flags.svg} alt='Bandeira do País'/>
        )
    })

    const searchedCountries = countriesFilter && countriesFilter.data.map((iten, index) => {
        return (
            <img key={index} src= {iten.flags.svg} alt='Bandeira do País'/>
        )
    }) 

    const filter = () => {
        switch (inputFilter) {
            case 'region':
                return(
                    <select required value= {typeFilter} onChange= {(e) => setTypeFilter(e.target.value)}>
                        <option disabled selected>Escolha uma região</option>
                        <option value='africa'>África</option>
                        <option value='america'>Américas</option>
                        <option value='asia'>Ásia</option>
                        <option value='europe'>Europa</option>
                        <option value='oceania'>Oceania</option>
                    </select>
                )
            case 'capital':
                return(
                    <input 
                        placeholder= 'Insira o nome da capital...' 
                        required
                        value={typeFilter} 
                        onChange={(e) => setTypeFilter(e.target.value)}
                    />
                )
            case 'lang':
                return(
                    <input 
                        placeholder= 'Insira a linguagem no padrão ISO 639-2'
                        type='text'
                        minLength= '3'
                        maxLength= '3'
                        required
                        value={typeFilter} 
                        onChange={(e) => setTypeFilter(e.target.value)}
                    />
                )
            case 'country':
                return(
                    <input
                        placeholder= 'Insira o nome do país...'  
                        required
                        value={typeFilter} 
                        onChange={(e) => setTypeFilter(e.target.value)}
                    />
                )
            default:
                return (<div></div>)
        }
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
                        {countriesFilter.isLoading && <p>Carregando...</p>}
                        {!countriesFilter.isLoading && countriesFilter.error && <p>Ocorreu um erro!</p>}
                        {!countriesFilter.isLoading && searchedCountries}
                    </div>
                )
            default:
                return(
                    <div>
                        {countries.isLoading && <p>Carregando...</p>}
                        {!countries.isLoading && countries.error && <p>Ocorreu um erro!</p>}
                        {!countries.isLoading && allCountries}
                    </div>
                )
        }
    }

    return (
        <>
            <Header>
                <img src={logo} alt= 'Logo'/>
                <button>Voltar</button>
            </Header>

            <main>
                <div>
                    <div>
                        <p>Filtrar por</p>
                        <select value= {inputFilter} onChange={(e) => setInputFilter(e.target.value)}>
                            <option value="" disabled selected>Escolha uma opção</option>
                            <option value='region'>Região</option>
                            <option value='capital'>Capital</option>
                            <option value='lang'>Lingua</option>
                            <option value='country'>País</option>
                        </select>
                    </div>
                    
                    {filter()}
                    
                    <button onClick={onClickSearchFilter}>Pesquisar</button>
                </div>
                {countriesRender()}
            </main>
        </>
    )
}

export default HomePage