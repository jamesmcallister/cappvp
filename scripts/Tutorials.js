//<Tutorials/>
import React from 'react';
import { History } from 'react-router';
import reactMixin from 'react-mixin';
// CapPvP imports
import Header from './components/Header';
import MainPicture from './components/MainPicture';
import ServerBox from './components/ServerBox';

class Tutorials extends React.Component {
  render() {
    return (
      <div>
      <Header siteName="CapPvP" tagline="Smash Smash Smash!!" />
      <p>Tutorials</p>
      <MainPicture />
      <ServerBox />
      </div>
    )
  }
}

reactMixin.onClass(Tutorials, History);
export default Tutorials;
