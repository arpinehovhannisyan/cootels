import styled from 'styled-components';

export const BlockWrapper = styled.div`
    display: flex;
    gap: 126px;
    align-items: center;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    ${props => props.spaceBottom ? 'margin-bottom: 32px;' : ''}
`;

export const Paragraph = styled.p`
    width: 584px;
    margin: 18px 0;

    &:last-of-type {
        margin-bottom: 32px;
    }
`;