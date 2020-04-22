import React from 'react';
import InfoBoxSpeakers from '../components/InfoboxSpeakers/InfoboxSpeakers'
const Speakers = () => {
    return (
        <>
            <h1 class="PageTitle">Sudionici</h1>
            <section className="section-events">
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