import React from 'react';
import InfoBoxSpeakers from '../components/InfoboxSpeakers/InfoboxSpeakers';
import CardsGrid from '../components/CardsGrid/CardsGrid';

const Speakers = () => {
    return (
        <>
            <h1 className="PageTitle">Sudionici</h1>
            <CardsGrid>
                <InfoBoxSpeakers />
                <InfoBoxSpeakers />
                <InfoBoxSpeakers />
                <InfoBoxSpeakers />
                <InfoBoxSpeakers />
                <InfoBoxSpeakers />
            </CardsGrid>
        </>
    );
}

export default Speakers;