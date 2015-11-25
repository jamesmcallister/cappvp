//<Store/>
import React from 'react';
import { History } from 'react-router';
import reactMixin from 'react-mixin';
// CapPvP imports
import Header from './components/Header';
class Store extends React.Component {


  render() {
    return (
    	<div>
      <Header />
      	<p>Store</p>
      </div>
    )
  }
}

reactMixin.onClass(Store, History);

export default Store;
