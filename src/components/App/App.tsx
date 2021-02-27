import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Documents from '../Documents';

import Header from '../Header';

import './App.scss';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/documents">
          <Documents />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
