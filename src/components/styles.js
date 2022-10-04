import styled from 'styled-components';

export const Button = styled.button`
    color: #FFFFFF;
    background: var(--bg-color-dark);
    padding: 14px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: .2s;
    line-heigt: 19px;
    font-size: 16px;
    font-weigt: 500;
    font-family: 'Inter';

    :hover {
        opacity: .9;
    }
`;

export const Section = styled.section`
    padding: 80px 0;
`;

export const Title1 = styled.h1`
    font-family: Montserrat;
    font-weight: 600;
    font-size: 48px;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: var(--text-color-1);
    margin: 0 0 24px 0;
    ${props => props.center ? 'text-align: center;' : ''}
`;

export const Title2 = styled.h2`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 36px;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: #192252;
    margin: 0 0 24px 0;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;
