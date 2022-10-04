import styled from 'styled-components';

export const Paragraph = styled.p`
    width: 588px;
    margin: 0 auto 32px;
`;

export const RoomHeading = styled.div`
    text-align: center;
`;

export const RoomList = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 88px;
`;

export const RoomItem = styled.div`
 h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #000000;
    margin: 32px 0 16px;
 }

 a {
    display: flex;
    color: var(--text-color-2);
    gap: 14px;
    text-decoration: none;
    align-items: center;
    margin-top: 32px;

    :hover {
        color: var(--text-color-1);
    }
 }
`