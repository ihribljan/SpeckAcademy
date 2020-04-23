import React from 'react';
import './InfoboxSpeakers.scss';

const InfoboxSpeakers = () => {
    return (
        <>
            <div className="InfoBox">
                <div className="InfoBox__Header">
                    <div className="InfoBox__Icon InfoBox__Icon_TypeSpeaker"></div>
                    <h2 className="InfoBox__Title">Johan Bach</h2>
                </div>
                <p className="InfoBox__About">Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one.</p>
                <div className="InfoBox__Footer">
                    <a href="/#" className="InfoBox__BtnJoin">Prati sudionika</a>
                </div>
            </div>
        </>
    );
}
export default InfoboxSpeakers;










