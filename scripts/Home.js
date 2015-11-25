//<Home/>
import React from 'react'
import { History } from 'react-router'
import reactMixin from 'react-mixin'
// CapPvP imports
import Header from './components/Header'
import ServerBox  from './components/ServerBox'
import MainPicture  from './components/MainPicture'

class Home extends React.Component {
  render() {
    return (
	<div>
   		<Header siteName="CapPvP" />
      <MainPicture />
      <ServerBox />
     </div>
    )
  }
}

reactMixin.onClass(Home, History);
export default Home;
