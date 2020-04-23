import React from 'react';
import './Hero.scss';
import './../../App.scss'
import { Link } from 'react-router-dom';

const links = {
    log_in: 'Prijavi se'
}

const Hero = () => {
    return (
        <section className="SectionHero">
            <div className="SectionHero__DataContainer">
                <h1 className="SectionHero__Title">Tjedan karijera</h1>
                <span className="SectionHero__Organizer">FOI</span>
                <p className="SectionHero__Date">20.10.2020. - 26.10.2020.</p>
                <Link className="Btn"
                    to="/#">{links.log_in}
                </Link>
            </div>
        </section>
    );
}

export default Hero;
