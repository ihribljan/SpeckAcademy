import React from 'react';
import InfoboxEvents from '../components/InfoboxEvents/InfoboxEvents';
import CardsGrid from '../components/CardsGrid/CardsGrid';

const Events = () => {
    return (
        <>
            <h1 class="PageTitle">Događanja</h1>
            <CardsGrid>                
                <InfoboxEvents />
                <InfoboxEvents />
                <InfoboxEvents />
                <InfoboxEvents />
                <InfoboxEvents />
                <InfoboxEvents />
            </CardsGrid>
        </>
    );
}

export default Events;