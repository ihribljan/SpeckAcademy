import React from 'react';
import '../Card/Card.scss';

const Card = (props) => {
    return (
        <div class="cards-container">
            <a href="/#" className="card">
                <figure className="figure">
                    <img className="img"
                        src={props.image}
                        alt={props.alt}
                    />
                    <p class="card__title">{props.children}</p>
                </figure>
            </a>
        </div>
    );
}

export default Card;