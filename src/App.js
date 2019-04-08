import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import TopMenu from './site/top-menu/Top-menu';
import Footer from './site/footer/Footer';
import SpinningLogo from './site/content/demo/SpinningLogo';
import Biography from './site/content/bio/Biography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />

        <Switch>
          <Route exact path="/" component={SpinningLogo} />
          <Route path="/bio" component={Biography} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
