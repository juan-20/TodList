import styled from 'styled-components';


export const Container = styled.div`

h1{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #333;
}


p{
    font-size: 12px;
}
`;

interface TextProps {
    isActive: boolean;
    activeColor: 'gray' | 'red';
}

export const Alert = styled.p<TextProps>`
    color: ${(props) => props.isActive
        ? '#333' : 'red'
    };

    
    display: ${(props) => props.isActive
        ? 'none' : 'inline'
    }
    

    `;
