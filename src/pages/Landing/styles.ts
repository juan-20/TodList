import styled from 'styled-components';

export const Container = styled.div`
  
    #landing{
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: 100vh;
    background: #333;

    overflow: hidden;

    .float-icon{
        width: 200px;
        height: 200px;
        margin-top: 20px;
        margin-left: 20px;
    }
    .memo{
        margin-top: 20%;
        margin-right: 300px;
    }
    .rocket{
        margin-top: 30%;
        /* margin-right: 300px; */
    }
    

    aside {
        flex: 7;

        color: #fff;

        /* background: pink; */


        display: flex;
        flex-direction: column;
        justify-content: center;

        /* gambiarra ;-; */
        padding-left: 19% ;

        img {
            max-width: 320px;
        }

        strong {
            font-size: 2.25rem;
            margin-top: 16px;
            color: #f8f8f8;
        }
    }

    main {
        flex: 8;
        background: #333;

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 10%;
        padding-top: 35.5rem;
    }
    
    button {
        width: 6.2rem;
        height: 6.2rem;
        border-radius: 20px;
        font-weight: 500;
        background: #E24817;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;

        transition: filter 0.2s;

        img {
            margin-right: 8px;
        }

        &:hover {
            filter: brightness(0.8);
        }
    }

    }
   
`;
