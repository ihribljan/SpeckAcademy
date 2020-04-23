import React from 'react';
import '../../App.scss';
import '../InfoboxSpeakers/InfoboxSpeakers';

//Images
import ImgLocation from '../../assets/img/location-icon.png';
import ImgTime from '../../assets/img/time-icon.png';

const InfoboxEvents = () => {
    return (
        <>
            <div className="InfoBox">
                <div className="InfoBox__Header">
                    <div className="InfoBox__Icon InfoBox__Icon_TypeEvent"></div>
                    <h2 className="InfoBox__Title">How can we benefit from React Redux</h2>
                </div>
                <div className="InfoBox__Subheader">
                    <div className="InfoBox__SubheaderBox">
                        <figure className="InfoBox__Subheader_Figure">
                            <img className="InfoBox__Subheader_Img" src={ImgLocation} alt="Location icon"/>
                        </figure>
                        <span className="InfoBox__Subheader_BoxText">Dvorana D09</span>
                    </div>
                    <div className="InfoBox__SubheaderBox">
                        <figure className="InfoBox__Subheader_Figure">
                            <img className="InfoBox__Subheader_Img" src={ImgTime} alt="Location icon" />
                        </figure>
                        <span className="InfoBox__Subheader_BoxText">24.3. u 13:45h</span>
                    </div>
                </div>
                <p className="InfoBox__About">Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one.</p>
                <div className="InfoBox__Footer">
                    <a href="/#" className="InfoBox__BtnJoin">Prijavi se na predavanje</a>
                </div>
            </div>
        </>
    );

}

export default InfoboxEvents;