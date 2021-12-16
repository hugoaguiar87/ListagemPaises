import styled from "styled-components";

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
`

export const InfoCountry = styled.div`
    display: flex;
    gap: 30px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #454545;

    span{
        padding: 0px 5px;
    }

    img{
        width: 443px;
        height: 258px;
    }
`

export const Main = styled.main`
    padding: 120px 150px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #000000;

    .neighboring{
        margin-top: 150px;
        img{
            width: 316px;
            height: 181px;
            padding-right: 30px;
            padding-top: 20px;
            cursor: pointer;
        }
    }


`
