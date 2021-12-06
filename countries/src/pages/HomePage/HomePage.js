import { useState } from 'react'
import useRequest from '../../hook/useRequest'
import logo  from '../../img/logo.svg'

const HomePage = () => {
    const [inputFilter, setInputFilter] = useState()
    const [typeFilter, setTypeFilter] = useState()
    const countries = useRequest('https://restcountries.com/v3.1/all')

    const allCountries = countries && countries.data.map((iten, index) => {
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
            case 'cod':
                return(
                    <input
                        placeholder= 'Insira o código de chamada...' 
                        required
                        value={typeFilter}
                        type= 'number' 
                        min='0'
                        onChange={(e) => setTypeFilter(e.target.value)}
                    />
                )
            default:
                return (<div></div>)
        }
    }

    // const onClickSearchFilter = () => {
    //         // Aqui será feito um switch case no qual
    //         // para cada filtro será feita uma requisição diferente.
    //         // que irá retornar os países filtrados (a resposta da requisição).
    //     }
    

    return (
        <>
            <header>
                <img src={logo} alt= 'Logo'/>
                <button>Voltar</button>
            </header>

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
                            <option value='cod'>Código de ligação</option>
                        </select>
                    </div>
                    
                    {filter()}
                    
                    <button>Pesquisar</button>
                </div>
                {allCountries}
            </main>
        </>
    )
}

export default HomePage