import { Button, Title1 } from '../styles';
import { Images, Paragraph, Section } from './styles';

function ReservationSection() {
    return (
        <Section>
            <div>
                <Title1>Nature, Warmth, and Beauty in One Space</Title1>
                <Paragraph>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</Paragraph>
                <Button>Reservaation</Button>
            </div>
            <Images>
                <img src="/assets/meritt-thomas-u-1.png" alt="" />
                <img src="/assets/meritt-thomas-u-2.png" alt="" />
                <img src="/assets/meritt-thomas-u-3.png" alt="" />
            </Images>
        </Section>
    );
}

export default ReservationSection;