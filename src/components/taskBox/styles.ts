import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1.25rem 0.625rem 1.25rem ;
    
    .task{
        width: 17.188rem;
        height: 5.625rem;

        border-radius: 0.313rem;
        background: #fff;

        display: flex;
        flex-direction: column;

        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

        &-content{
         padding-left: 0.938rem;
         h1{
            color: #333;
            font-size: 1rem;
            font-weight: 500;
         }
        
            .tag{
                border-radius: 5px;
                background: #5CC4FF;
                width: 3.12rem;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
            p{
                font-weight: 700;
                font-size: 12px;
                color: #fff;
                 }
             }
        }
    }
`;
