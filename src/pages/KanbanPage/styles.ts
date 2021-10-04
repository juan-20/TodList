import styled from 'styled-components';

export const Wrapper = styled.div`

    .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .list{
        display: flex;
        gap: 1.25rem;
        padding: 1.25rem 0 0 1.25rem;
    }
   .list-box{
   
}
`;

interface BackgroundProps {
    NewColor: string;
}

export const ListBox = styled.div<BackgroundProps>`

     display: flex;
     flex-direction: column;
     min-height: 12.5rem;
     width: 19.688rem;

     background: ${(props) => props.NewColor
        ? props.NewColor : 'red'};

     color: #fff;
     border-radius: 20px;
     
     &-content{
         display: flex;
         flex-direction: column;
         justify-content: center;
        align-items: center;
    }

    .list-box-content{

    >h1{
        font-size: 1.5rem;
        margin-top: 1.25rem;
        margin-left: 1.25rem;
    }
    }

`;

export const CreateTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    height: 1rem;
    
    background: #1962D1;

    cursor: pointer;
    border-radius: 0px 0px 20px 20px;
    
    
    p{
        color: #fff;
        padding-left: 1rem;
        font-size: 1rem;
    }
`;
export const CreateListBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    height: 1rem;
    
    background: #1962D1;

    cursor: pointer;
    
    p{
        color: #fff;
        padding-left: 1rem;
        font-size: 1rem;
    }
`;