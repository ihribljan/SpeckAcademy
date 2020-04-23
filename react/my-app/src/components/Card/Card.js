import React from 'react';
import '../Card/Card.scss';

const Card = (props) => {
    return (
        <div className="CardsContainer">
            <a href="/#" className="CardsContainer__Card">
                <figure className="CardsContainer__Figure">
                    <img className="CardsContainer__Img"
                        src={props.image}
                        alt={props.alt}
                    />
                    <p className="CardsContainer__Title">{props.children}</p>
                </figure>
            </a>
        </div>
    );
}

export default Card;