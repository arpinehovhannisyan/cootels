import GetRoomSteps from '../GetRoomSteps';
import { Section, Row, Title2, Button } from '../styles';
import { GetRoom } from './styles';

function Reservation() {
    return (
        <Section>
            <Row>
                <GetRoom>
                    <div>Start your journey!</div>
                    <Title2>How to Get My Room?</Title2>
                    <p>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
                    <Row>
                        <Button >Contact us</Button>
                        <a href="#">Explore more room</a>
                    </Row>
                </GetRoom>

                <GetRoomSteps/>
            </Row>
        </Section>
    )
}

export default Reservation;