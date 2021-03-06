import styled from 'styled-components'

export const Header = styled.header`

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;  

    button{
        background-color: white;
        border: 1px solid #6D2080;
        box-sizing: border-box;
        width: 134px;
        height: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #6D2080;
        font-size: 15px;
        padding: 0px 25px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;

        cursor: pointer;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {

        button{
            border: 0px;
            width: 5px;
            height: 0px;
            p{
                display: none;
            }
        }
    }
`

export const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 170px;
    margin: 20px 0px;
    margin-top: 70px;

    .typeFilter{
        p{
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #6D2080;
        }
        select{
            border: 1px solid #A8A8A8;
            box-sizing: border-box;
            transform: rotate(0deg);
            width: 316px;
        }
    }

    button{
        background: #6D2080;
        border-radius: 10px;
        color: white;
        width: 156px;
        height: 36px;

        cursor: pointer;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        div {
            padding-bottom: 10px;
        }

    }
`

export const Input = styled.input`
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    transform: rotate(0deg);
    width: 316px;
`

export const Select = styled.select`
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    transform: rotate(0deg);
    width: 316px;
`

export const Country = styled.img`
    width: 316px;
    height: 181px;
    padding: 10px 60px;
    cursor: pointer;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 100%;
        padding: 0px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`

export const Main = styled.main`
    margin-bottom: 100px ;
    .country{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 100%;

    }
`

export const Div = styled.div`
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        padding: 30px;

    }
`