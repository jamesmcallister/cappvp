/*
ServerPing
  This will let us make <ServerPing/>
*/
import React from 'react';
import { History } from 'react-router';
import autobind from 'autobind-decorator';
import reactMixin from 'react-mixin';

class ServerPing extends React.Component {
  render() {
    return (

      <div className="">
        <div className="ol-xs-6 col-md-4">
          <div className="panel panel-primary">
            <div className="panel-heading text-center">
              {this.props.serverName}
            </div>
            <div className="panel-body text-center"><h1>
              {this.props.serverIp}</h1>
            Ping: <span id="capeu">{this.props.serverPing}</span>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
// sets the type of proptypes
ServerPing.propTypes = {
  serverName: React.PropTypes.string.isRequired,
  serverIp: React.PropTypes.string.isRequired
}
// sets default proptypes
ServerPing.defaultProps ={
  serverName: "Default Server Name",
  serverIp: "127.0.0.1",
  serverPing: '-0.1ms'
}

reactMixin.onClass(ServerPing, History);

export default ServerPing;
