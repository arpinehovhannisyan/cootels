import styled from 'styled-components';

export const Collapse = styled.div`
    width: 588px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.07));
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Icon  = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    right: 36px;
    cursor: pointer;
    transition: .2s linear;
`

export const Panel = styled.div`
    padding: ${props => props.isOpen ? '38px  36px 36px' : '32px  36px'};
    background: #fff;
    border-radius: 4px;
    position: relative;

    &>div{
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 24px;
        color: var(--text-color-2);
    }

    p {
        margin: ${props => props.isOpen ? '24px 0 0' : '0'};
        height: ${props => props.isOpen ? 'auto' : '0'};
        transition: .3s;
        overflow: hidden;
    }

    ${Icon} {
        ${props => props.isOpen ?  
            `background: var(--orange-1); 
             top: 36px;
             color: #ffffff;
             transform: rotate(180deg);` : 
            `background: var(--orange-2); 
             top: 30px;
             color: var(--orange-1);
             transform: rotate(0deg);` 
        }
        
    }
   
`
export const Heading = styled.div`
    font-weight: 600;
    font-size: 24px;
    color: var(--text-color-2);

`




