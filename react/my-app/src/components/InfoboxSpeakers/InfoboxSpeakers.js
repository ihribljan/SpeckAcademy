import React from 'react';
import '../../App.scss';
import './InfoboxSpeakers.scss';


const InfoboxSpeakers = () => {
    return (
        <>
            <div class="info-box">
                <div class="info-box__header">
                    <div class="info-box__icon info-box__icon_type-speaker"></div>
                    <h2 class="info-box__title">Johan Bach</h2>
                </div>
                <p class="info-box__about">Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one.</p>
                <div class="info-box__footer">
                    <a href="/#" class="info-box__btn-join">Prati sudionika</a>
                </div>
            </div>
        </>
    );
}
export default InfoboxSpeakers;










