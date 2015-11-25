//<MainPicture/>
import React from 'react';
import { History } from 'react-router';
import autobind from 'autobind-decorator';
import reactMixin from 'react-mixin';


class MainPicture extends React.Component {
  render() {
    let imgUrl = '../../build/css/images/maxresdefault.jpg'
    return (
    	<div>
<div className="text-center well home-banner" style={{background: 'url(' + imgUrl + ')' + 'center center no-repeat'}}></div>
      </div>
    )
  }
}

reactMixin.onClass(MainPicture, History);
export default MainPicture;
