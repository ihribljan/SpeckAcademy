import React from 'react';
import '../Main/Main.scss';

const Main = (props) => {
    return (
        <>
            <main className="MainContainer">
                {props.children}    
            </main>
        </>
    );
}

export default Main;