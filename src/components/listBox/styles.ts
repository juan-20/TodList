import styled from 'styled-components';

export const Container = styled.div`
    max-height: 12.5rem;
    width: 19.688rem;
    background: #5CC4FF;
    color: #fff;
    border-radius: 5px;

    >h1{
      padding: 0.938rem 1.25rem 0 0.938rem;
    }
`;

export const CreateTask = styled.div`
    display: flex;
    align-items: center;
    padding: 1.25rem;
    height: 1rem;

    background: #5CC4FF;

    cursor: pointer;
    
    p{
        color: #fff;
        padding-left: 1rem;
        font-size: 1rem;
    }

    :hover{
        filter: brightness(0.8);
    }
`;