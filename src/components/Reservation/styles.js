import styled from 'styled-components';
import { Title2, Row } from '../styles';

export const GetRoom = styled.div`
    width: 648px;


    ${Row} {
        gap: 24px;
    }

    ${Title2} {
        margin: 12px 0 24px;
    }

    div:first-child{
        font-weight: 500;
        font-size: 16px;
        color: var(--text-color-2);
    }

    p {
        width: 384px;
        margin-bottom: 32px;
    }

    a {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: var(--bg-color-dark);
        text-decoration: none;
    }
`;
