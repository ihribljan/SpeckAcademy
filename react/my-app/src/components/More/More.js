import React from 'react';
import './More.scss';
import '../../App.scss';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

//Images
import ImgCalendar from '../../assets/img/calendar.jpg';
import ImgSpeakers from '../../assets/img/speakers.jpg';
import ImgAbout from '../../assets/img/about.jpg';
import ImgPartners from '../../assets/img/partner.jpg';


const links = {
    more: 'Saznaj više',
}

const More = () => {
    return (
        <section class="SectionMore">
            <div class="SectionMore__About">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                    a
                    Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source.
                </p>
                <Link className="btn"
                    to="/#">{links.more}
                </Link>
            </div>
            <Card image={ImgAbout} alt="about">O tjednu karijera</Card>
            <Card image={ImgSpeakers} alt="speakers">Predavači</Card>
            <Card image={ImgCalendar} alt="calendar">Raspored događanja</Card>
            <Card image={ImgPartners} alt="partners">Partneri</Card>
        </section>
    );
}

export default More;