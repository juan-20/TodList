import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;


export const CreateTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    height: 1rem;
    width: 15rem;

    background: #CAD1D5;

    cursor: pointer;
    
    p{
        color: #333;
        padding-left: 1rem;
        font-size: 1rem;
    }

    :hover{
        filter: brightness(0.8);
    }
`;