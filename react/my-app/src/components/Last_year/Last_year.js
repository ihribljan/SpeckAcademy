import React from 'react';
import '../../App.scss';
import './Last_year.scss';
import { Link } from 'react-router-dom';

import Last_year from '../../assets/img/last-year.jpg';

const LastYear = () => {
    return (
        <section class="SectionLastYear">
            <div class="SectionLastYear__Inner">
                <h2>FOI tjedan karijera 2019</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                    a
                    Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source.</p>
                <Link
                    to="/last_year">
                    <figure>
                        <img src={Last_year} alt="last_year"/>
                    </figure>
                </Link>
            </div>
        </section>
    );
}

export default LastYear;
