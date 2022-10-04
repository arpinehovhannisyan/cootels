import { Logo, Navbar, Menu } from './styles';
import { Link } from 'react-router-dom';
import { Button } from '../styles';

function Header() {
    return (
        <Navbar>
            <Logo>Cootels</Logo>
            <Menu>
                <Link to="#rooms">Rooms</Link>
                <Link to="#reservation">Reservation</Link>
                <Link to="#contacts">Contacts</Link>
            </Menu>
            <Button>Get Started</Button>
        </Navbar>
    );
}

export default Header