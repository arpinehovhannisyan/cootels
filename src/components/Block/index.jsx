import { BlockWrapper, Paragraph } from './styles';
import { Title2, Button } from '../styles';

function Block({ imgSrc, title, paragraphs, buttonText, reverse, spaceBottom }) {
    return (
        <BlockWrapper reverse={reverse} spaceBottom={spaceBottom}>
            <img src={imgSrc} />
            <div>
                <Title2>{title}</Title2>
                {paragraphs.map(p => <Paragraph key={p}>{p}</Paragraph>)}
                {buttonText && <Button>{buttonText}</Button>}
            </div>
        </BlockWrapper>
    )
}

export default Block;