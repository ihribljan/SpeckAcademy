import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

//Components
import Header from './components/Header/Header';
import Main from  './components/Main/Main';

//Pages
import Home from '../src/pages/Home';
import Events from '../src/pages/Events';
import Speakers from '../src/pages/Speakers';

const App = () => {
    return (
      <>
        <Header />
        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/speakers" component={Speakers} />
        </Main>
      </>
    );
  }

export default App;
