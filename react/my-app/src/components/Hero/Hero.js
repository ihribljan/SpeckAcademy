import React from 'react';
import './Hero.scss';
import './../../App.scss'
import { Link } from 'react-router-dom';

const links = {
    log_in: 'Prijavi se'
}

const Hero = () => {
    return (
        <section class="SectionHero">
            <div class="SectionHero__DataContainer">
                <h1 class="SectionHero__Title">Tjedan karijera</h1>
                <span class="SectionHero__Organizer">FOI</span>
                <p class="SectionHero__Date">20.10.2020. - 26.10.2020.</p>
                <Link className="btn"
                    to="/#">{links.log_in}
                </Link>
            </div>
        </section>
    );
}

export default Hero;
