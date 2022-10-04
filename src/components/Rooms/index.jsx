import { Section, Title2, Button } from '../styles';
import { Paragraph, RoomHeading, RoomList, RoomItem } from './styles';

const rooms = [
    {
        title: 'Single Room',
        paragraph: 'Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.',
        imgSrc: '/assets/image-11.png'
    },
    {
        title: 'Double Room',
        paragraph: 'Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two',
        imgSrc: '/assets/image-10.png'
    },
    {
        title: 'Cootage',
        paragraph: 'Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends',
        imgSrc: '/assets/ian-keefe-1.png'
    }
]

function Rooms() {
    return (
        <Section>
            <RoomHeading>
                <Title2>Many Rooms to Choose</Title2>
                <Paragraph>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</Paragraph>
                <Button>Explore more</Button>
            </RoomHeading>

            <RoomList>
                {rooms.map(item => (
                    <RoomItem key={item.title}>
                        <img src={item.imgSrc} />
                        <h3>{item.title}</h3>
                        <p>{item.paragraph}</p>
                        <a href="#">Learn more
                          <img src="/assets/vector.png" />
                        </a>
                    </RoomItem>
                ))}
            </RoomList>
        </Section>
    );
}

export default Rooms;