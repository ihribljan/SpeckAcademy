import React from 'react';
import '../../App.scss';
import './InfoboxEvents.scss';

//Images
import ImgLocation from '../../assets/img/location-icon.png';
import ImgTime from '../../assets/img/time-icon.png';

const InfoboxEvents = () => {
    return (
        <>
            <div class="info-box">
                <div class="info-box__header">
                    <div class="info-box__icon info-box__icon_type-event"></div>
                    <h2 class="info-box__title">How can we benefit from React Redux</h2>
                </div>
                <div class="info-box__subheader">
                    <div class="info-box__subheader-box">
                        <figure class="info-box__subheader-figure">
                            <img className="info-box__subheader-img" src={ImgLocation} alt="Location icon"/>
                        </figure>
                        <span class="info-box__subheader-box-text">Dvorana D09</span>
                    </div>
                    <div class="info-box__subheader-box">
                        <figure class="info-box__subheader-figure">
                            <img className="info-box__subheader-img" src={ImgTime} alt="Location icon" />
                        </figure>
                        <span class="info-box__subheader-box-text">24.3. u 13:45h</span>
                    </div>
                </div>
                <p class="info-box__about">Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one.</p>
                <div class="info-box__footer">
                    <a href="/#" class="info-box__btn-join">Prijavi se na predavanje</a>
                </div>
            </div>
        </>
    );

}

export default InfoboxEvents;