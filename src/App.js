import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import ReservationSection from './components/ReservationSection';
import Reservation from './components/Reservation';
import Blocks from './components/Blocks';
import Rooms from './components/Rooms';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Wrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  box-sizing: border-box;
`

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <ReservationSection />
        <Blocks />
        <Rooms />
        <Reservation />
        <Testimonials />
      </Wrapper>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
