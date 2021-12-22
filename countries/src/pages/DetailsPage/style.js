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

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 0px;

        img {
            width: 316px;
            height: 181px;
        }

        div{
            align-self: start;
            margin-left: 50px ;
        }
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

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        padding: 0px;

        margin: 70px 0px;

        .neighboring{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                width: 316px;
                height: 181px;
            }

            p{
                align-self: start;
                margin-left: 50px;
            }
        }
    }


`
