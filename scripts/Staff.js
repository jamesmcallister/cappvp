//<Staff/>
import React from 'react';
import { History } from 'react-router';
import reactMixin from 'react-mixin';
// CapPvP imports
import Header from './components/Header';

class Staff extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <p>Staff</p>
      </div>
    )
  }
}

reactMixin.onClass(Staff, History);
export default Staff;
