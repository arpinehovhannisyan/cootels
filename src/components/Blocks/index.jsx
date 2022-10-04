import { Section } from '../styles';
import Block from '../Block';

function Blocks() {
    return (
        <>
            <Section>
                <Block
                    imgSrc="/assets/image-13.png"
                    title="Cozy and Down to Earth Cootage Hotel in Norway."
                    paragraphs={['Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.', 'Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.']}
                    buttonText="Learn More"
                />
            </Section>
            <Section>
                <Block
                    imgSrc="/assets/image-21.png"
                    title="Cabin Activities"
                    paragraphs={['Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.']}
                    spaceBottom
                    reverse
                />
                <Block
                    imgSrc="/assets/image-18.png"
                    title="100% Organic Food"
                    paragraphs={['We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.']}
                />
            </Section>
        </>
    )
}

export default Blocks;