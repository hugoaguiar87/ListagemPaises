import styled from 'styled-components'

export const Button = styled.button`
    
    background: #FFFFFF;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    border: 0px;

    width: 34px;
    height: 34px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #8D8D8D;

    margin: 10px;
    cursor: pointer;

    /* @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 100%;
    } */
`

export const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 100%;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 100%;
        padding: 0px;
        flex-wrap: wrap;
    }
`