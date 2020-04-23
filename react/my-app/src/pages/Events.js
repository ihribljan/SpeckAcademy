import React from 'react';
import InfoboxEvents from '../components/InfoboxEvents/InfoboxEvents';

const Events = () => {
    return (
        <>
            <h1 class="PageTitle">Događanja</h1>
            <section className="SectionEvents">
                <InfoboxEvents></InfoboxEvents>
                <InfoboxEvents></InfoboxEvents>
                <InfoboxEvents></InfoboxEvents>
                <InfoboxEvents></InfoboxEvents>
                <InfoboxEvents></InfoboxEvents>
                <InfoboxEvents></InfoboxEvents>
            </section>
        </>
    );
}

export default Events;