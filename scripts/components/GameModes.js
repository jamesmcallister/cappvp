//<GameModes/>
import React from 'react';
import { History } from 'react-router';
import autobind from 'autobind-decorator';
import reactMixin from 'react-mixin';


class GameModes extends React.Component {
  render() {
    return (
      <div className="">
        <h1>Our Gamemodes</h1>

          <div className="row">
            <div className="ol-xs-6 col-md-4">
              <a href="#">
                <div className="thumbnail"><img src="../css/images/800SG.png"></img></div>
                <h3>HCFactions</h3>
                </a>
              <a href="#" className="btn btn-block btn-success" data-clipboard-text="mc.cappvp.com" title="Click to copy.">server hcf <span className="glyphicon glyphicon-paperclip"></span></a>
                <div className="panel panel-default">
                  <div className="panel-heading lead text-center">Features</div>
                    <div className="panel-body">
                      <p>HCFactions is a gamemode like factions but with a twist, instead of having 200 player factions you can only have 30!</p>
                      <p>There is a feature called DTR (Deaths Until Raidable) When you die you lose 1 DTR, but each faction is limited to 6.5 so you can 6 people die but on the 7th death you go raidble meaning that people can mine and build inside of the claim and open chests but cannot claim it.
                      </p>
                    </div>
                </div>
              </div>
            <div className="ol-xs-6 col-md-4">
              <a href="#">
                <div className="thumbnail"><img src="../css/images/800SG.png"></img></div>
                <h3>Teams</h3>
                </a>
              <a href="#" className="btn btn-block btn-success" data-clipboard-text="mc.cappvp.com" title="Click to copy.">server hcf <span className="glyphicon glyphicon-paperclip"></span></a>
                <div className="panel panel-default">
                  <div className="panel-heading lead text-center">Features</div>
                    <div className="panel-body">
                      <p>Teams is a gamemode like regular factions but without claming. </p>
                      <p>Teams is a competive PvP gamemode meaning that every 20 minutes you get /kit pvp so that can PvP with your other team members.</p>
                      <p>To build a base you simply type /kit starter and /kit farmer with this you have everything you need to start making your base. </p>
                      <p>REMEMBER the world boarder will be 10k so build your base as far out as possible. Also remember that people can track you so be careful when heading back to your base.</p>
                    </div>
                </div>
            </div>
            <div className="ol-xs-6 col-md-4">
              <a href="#">
                <div className="thumbnail"><img src="../css/images/800SG.png"></img></div>
                <h3>HCFactions</h3>
                </a>
              <a href="#" className="btn btn-block btn-success" data-clipboard-text="mc.cappvp.com" title="Click to copy.">server hcf <span className="glyphicon glyphicon-paperclip"></span></a>
                <div className="panel panel-default">
                  <div className="panel-heading lead text-center">Features</div>
                    <div className="panel-body">
                      <p>HCFactions is a gamemode like factions but with a twist, instead of having 200 player factions you can only have 30!</p>
                      <p>There is a feature called DTR (Deaths Until Raidable) When you die you lose 1 DTR, but each faction is limited to 6.5 so you can 6 people die but on the 7th death you go raidble meaning that people can mine and build inside of the claim and open chests but cannot claim it.
                      </p>
                    </div>
                </div>
            </div>
          </div>






    </div> //end of container
  )
  }
}

reactMixin.onClass(GameModes, History);
export default GameModes;
