import React, { Component, Fragment } from 'react';
import JustifiedGallery from './components/JustifiedGallery/JustifiedGallery'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <JustifiedGallery />
      </Fragment>
    );
  }
}

export default App;
