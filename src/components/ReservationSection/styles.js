import styled from 'styled-components';

export const Section = styled.section`
    padding: 80px 0 177px;
    display: flex;
    align-items: center;
`;

export const Images = styled.div`
    display: flex;
    gap: 24px;

    img:nth-child(2) {
        position: relative;
        top: 80px;
    }
`;

export const Paragraph = styled.p`
    width: 485px;
    margin: 0 0 32px 0;
`;
