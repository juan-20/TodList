import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    /* font */
    *{
        @font-face {
         font-family: "Avenir Next";
         src: url("assets/fonts/AvenirNextLTPro-Bold.otf"),
              url("assets/fonts/AvenirNextLTPro-It.otf")
              url("assets/fonts/AvenirNextLTPro-Regular.otf")
         }
         font-family: 'Avenir Next', sans-serif;
    }

    /* inputs */
    input{
            width: 90%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;

            border: 1px solid #d7d7d7;
            background: #e7e9ee;

            font-weight: 400;
            font-size: 1rem;

            & + input {
                margin-top: 1rem;
            }
        }

        input[type = "color"]{
            background: transparent;
            border: none;
        }

        button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: #33cc95;
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

    /* modal style */
    .react-modal-overlay{
        background: rgba(0,0,0, 0.5);
        
        position: fixed;
        top: 0%;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center ;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: #f0f2f5;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

    }

    `;