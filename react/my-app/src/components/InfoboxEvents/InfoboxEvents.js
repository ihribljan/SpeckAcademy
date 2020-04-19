import React from 'react';
import '../../App.scss';
import './InfoboxEvents.scss';
import { Link } from 'react-router-dom';

//Images
import ImgLocation from '../../assets/img/location-icon.png';
import ImgTime from '../../assets/img/time-icon.png';

const InfoboxEvents = () => {
    return (
        <>
            <div class="InfoBox">
                <div class="InfoBox__Header">
                    <div class="InfoBox__Icon InfoBox__Icon_TypeEvent"></div>
                    <h2 class="InfoBox__Title">How can we benefit from React Redux</h2>
                </div>
                <div class="InfoBox__Subheader">
                    <div class="InfoBox__SubheaderBox">
                        <Link
                            to="/#">
                            <figure class="InfoBox__subheaderFigure">
                                <img className="InfoBox__SubheaderImg" src={ImgLocation} alt="Location icon"/>
                            </figure>
                            <span class="InfoBox__SubheaderBoxText">Dvorana D09</span>
                        </Link>
                    </div>
                    <div class="InfoBox__SubheaderBox">
                        <Link
                            to="/#">
                            <figure class="InfoBox__SubheaderFigure">
                                <img className="InfoBox__SubheaderImg" src={ImgTime} alt="Location icon" />
                            </figure>
                        <span class="InfoBox__SubheaderBoxText">24.3. u 13:45h</span>
                        </Link>
                    </div>
                </div>
                <p class="InfoBox__About">Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one.</p>
                <div class="InfoBox__Footer">
                    <a href="/#" class="InfoBox__BtnJoin">Prijavi se na predavanje</a>
                </div>
            </div>
        </>
    );

}

export default InfoboxEvents;