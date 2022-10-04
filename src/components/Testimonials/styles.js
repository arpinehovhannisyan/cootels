import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow: hidden;
`;

export const Carousel = styled.div`
    position: relative;
    display: flex;
    transition: .3s;
    width: calc(1200px * ${props => props.itemsCount});
    left: -${props => props.activeIndex * 1200}px;
`;

export const CarouselItem = styled.div`
    text-align: center;
    width: 1200px;

    p {
        width: 793.06px;
        margin: 0 auto 40px;
    }

    img {
        margin: 38px 0 44px;
    }
`;

export const Name = styled.div`
    font-weight: 500;
    font-size: 20px;
    color: var(--text-color-1);
    margin-bottom: 24px;
`;

export const CarouselControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

export const Dots = styled.div`
    border-radius: 50%;
    cursor: pointer;

    ${props => props.isActive ? `
        width: 12px;
        height: 12px;
        background: #FAB047;
    `: `
        width: 8px;
        height: 8px;
        background: rgba(250, 176, 71, 0.35);
    `}
`;