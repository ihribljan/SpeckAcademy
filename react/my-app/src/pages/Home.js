import React from 'react';

//Components
import Hero from '../components/Hero/Hero';
import LastYear from '../components/Last_year/Last_year';
import More from '../components/More/More';

//Images
import ImgEvent from '../assets/img/event.jpg';
import ImgLast_year from '../assets/img/last-year.jpg';

const Home = () => {
    return (
        <>
            <Hero Image={ImgEvent}></Hero>
            <More />
            <LastYear Image={ImgLast_year}></LastYear>
        </>
    );
}

export default Home;