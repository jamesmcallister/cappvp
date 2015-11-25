/*
  Header
  <Header/>
*/

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <p className="navbar-brand">
                      <a className="navbar-link" href="/"><img src="./css/images/800SG.png" width="32" height="32"></img>
                        {this.props.siteName}
                    </a>
                  </p>
              </div>
              <div className="collapse navbar-collapse" id="navbar-collapse">
                  <ul className="nav navbar-nav">
                      <li><a href="#"><i className="fa fa-users"></i> Reddit</a></li>
                      <li><a href="/store">  <i className="fa fa-shopping-cart"></i> Store</a></li>
                      <li><a href="/servers"><i className="fa fa-database"></i> Servers</a></li>
                      <li><a href="/tutorials"><i className="fa fa-terminal"></i> Tutorials</a>
                      </li>
                  </ul></div></div>
          </nav>
    )
  }
}
Header.propTypes = {
  siteName : React.PropTypes.string
}
// sets default proptypes
Header.defaultProps ={
  siteName: "CapPvp"
}


export default Header;
