 // <Servers/>
import React from 'react';
import { History } from 'react-router';
import autobind from 'autobind-decorator';
import reactMixin from 'react-mixin';
// CapPvP imports
import Header from './components/Header';
import ServerBox from './components/ServerBox';
import GameModes from './components/GameModes'

class Servers extends React.Component {
  render() {
    return (
    	<div>
    	<Header />
        <GameModes />
        <ServerBox />
      </div>
    )
  }
}

reactMixin.onClass(Servers, History);
export default Servers;
