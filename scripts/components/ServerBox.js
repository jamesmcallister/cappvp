/*
  ServerBox
  This will let us make <ServerBox/>
*/
import React from 'react';
import { History } from 'react-router';
import autobind from 'autobind-decorator';
import reactMixin from 'react-mixin';
import ServerPing from './ServerPing';

class ServerBox extends React.Component {
  render() {
    return (
    	<div className="row">
        <ServerPing serverName={'European Server'} serverIp={'eu.cappvp.com'} serverPing={'1337ms'} />
        <ServerPing serverName={'American Server'} serverIp={'us.cappvp.com'} />
        <ServerPing serverName={'Teamspeak3'} serverIp={'ts.cappvp.com'} serverPing={'195ms'} />
      </div>
    )
  }
}

reactMixin.onClass(ServerBox, History);

export default ServerBox;
