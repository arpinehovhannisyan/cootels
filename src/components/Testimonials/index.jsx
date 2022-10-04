import { useState } from 'react'
import { Title1, Section } from '../styles';
import { Carousel, CarouselControls, CarouselItem, Name, Wrapper, Dots } from './styles';

const testimonials = [
    {
        id: 1,
        text: '“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”',
        name: 'Kirana Dunham',
        img: 'avatar-1.png'
    },
    {
        id: 2,
        text: '“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”',
        name: 'Kirana Dunham',
        img: 'avatar-1.png'
    },
    {
        id: 3,
        text: '“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”',
        name: 'Kirana Dunham',
        img: 'avatar-1.png'
    },
    {
        id: 4,
        text: '“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”',
        name: 'Kirana Dunham',
        img: 'avatar-1.png'
    }
]

function Testimonials() {
    const [activItem, setActiveItem] = useState(1);

    return (
        <Section>
            <Title1 center>Hear From Our Happy Customers</Title1>
            <Wrapper>
                <Carousel itemsCount={testimonials.length} activeIndex={activItem}>
                    {testimonials.map(item => (
                        <CarouselItem key={item.id}>
                            <img src={`/assets/${item.img}`} />
                            <p>{item.text}</p>
                            <Name>{item.name}</Name>

                        </CarouselItem>
                    ))}
                </Carousel>
                <CarouselControls>
                    {testimonials.map((item, i) => <Dots
                        key={item.id}
                        isActive={i === activItem}
                        onClick={() => setActiveItem(i)}
                    />)}
                </CarouselControls>
            </Wrapper>
        </Section>
    )
}

export default Testimonials;