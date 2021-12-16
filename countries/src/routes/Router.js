import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import HomePage from '../pages/HomePage/HomePage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element= { <HomePage/> } />
                <Route path= "/details/:nameCountry" element= { <DetailsPage/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;