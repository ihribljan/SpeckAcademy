import React from 'react';
import InfoBoxSpeakers from '../components/InfoboxSpeakers/InfoboxSpeakers';

const Speakers = () => {
    return (
        <>
            <h1 className="PageTitle">Sudionici</h1>
            <section className="SectionEvents">
                <InfoBoxSpeakers></InfoBoxSpeakers>
                <InfoBoxSpeakers></InfoBoxSpeakers>
                <InfoBoxSpeakers></InfoBoxSpeakers>
                <InfoBoxSpeakers></InfoBoxSpeakers>
                <InfoBoxSpeakers></InfoBoxSpeakers>
                <InfoBoxSpeakers></InfoBoxSpeakers>
            </section>
        </>
    );
}

export default Speakers;