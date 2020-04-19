import React from 'react';
import '../../App.scss';
import './CardsGrid.scss';


const CardsGrid = (props) => {
    return (
        <>
            <section className="CardsGrid">
                {props.children}
            </section>
        </>
    );
}

export default CardsGrid;
