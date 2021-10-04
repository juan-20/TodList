import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1.25rem 0.625rem 1.25rem ;
    
    .task{
        width: 17.188rem;
        height: 5.625rem;

        border-radius: 0.313rem;
        background: #fff;
        cursor: move;
        margin-top: 1rem;

        display: flex;
        flex-direction: column;

        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

        &-content{
         padding-left: 0.938rem;
         h1{
            color: #333;
            font-size: 1rem;
            font-weight: 500;
            margin-top: 1rem;
         }
        
            .tag{
                border-radius: 5px;
                background: #5CC4FF;
                height: 24px;
                width: 10rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 1rem;
            p{
                font-weight: 700;
                font-size: 12px;
                color: #fff;
                 }
             }
             select{
                 background: none;
                 border: none;
             }
        }
    }

    p{
        width: 17.188rem;
        height: 26.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }
`;
