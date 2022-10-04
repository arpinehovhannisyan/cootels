import styled from 'styled-components';

export const Navbar = styled.nav`
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 600;
    color: var(--text-color-1);
`;

export const Menu = styled.div`
    display: flex;
    gap: 32px;

    a {
        color: var(--text-color-1);
        text-decoration: none;
    }
`;