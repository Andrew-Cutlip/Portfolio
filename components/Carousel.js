import styled from 'styled-components';
import React, {useState} from 'react';

const StyledCarousel = styled.div`
    width: 100%;
    display: flex;
`

const StyledCarouselItem = styled.div`
    width : 80%;;
`

const StyledCarouselButton = styled.button`
    width: 5rem;
    height: 15rem;
`

const Carousel = (props) => {
    let [itemIndex, setItemIndex] = useState(0);

    const nextItem = () => {
        if (itemIndex < items.length -1){
            setItemIndex(itemIndex + 1);
        }
        else {
            setItemIndex(0);
        }
        displayedItem = items[itemIndex];
    }

    const prevItem = () => {
        if (itemIndex > 0){
            setItemIndex(itemIndex - 1);
        }
        else {
            setItemIndex(items.length - 1);
        }
        displayedItem = items[itemIndex];
    }

    let items = null;
    let displayedItem = null;
    if (props.items) {
        items = props.items;
        displayedItem = items[itemIndex];
    }
    return (
        <StyledCarousel>
            <StyledCarouselButton onClick={prevItem}>Prev</StyledCarouselButton>
            <StyledCarouselItem>{displayedItem}</StyledCarouselItem>
            <StyledCarouselButton onClick={nextItem}>Next</StyledCarouselButton>
        </StyledCarousel>
    )
}

export default Carousel;